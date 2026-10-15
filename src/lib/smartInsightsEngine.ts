import type {
  BookingContext,
  HotelDetail,
  UserProfile,
  SmartInsightsState,
  TransferComparisonResult,
  RentTierResult,
  TierMultiplier,
} from "./types";
import { PORTAL_RATE, TIER_THRESHOLDS, POINTS_VALUE_CENTS } from "./constants";

function getTierMultiplier(ratio: number): TierMultiplier {
  if (ratio >= 1.0) return 1.25;
  if (ratio >= 0.75) return 1.0;
  if (ratio >= 0.5) return 0.75;
  return 0.5;
}

function getNextTierThreshold(currentRatio: number): number | null {
  for (const t of TIER_THRESHOLDS) {
    if (currentRatio < t.ratio) return t.ratio;
  }
  return null;
}

export function calculateSmartInsights(
  cashPercent: number,
  booking: BookingContext,
  hotel: HotelDetail,
  user: UserProfile
): SmartInsightsState {
  const totalPrice = booking.totalCashPrice;

  // 1. Credits: hotel credit + min(biltCash, cap), capped at total
  const creditsApplied = Math.min(
    user.hotelCreditRemaining + Math.min(user.biltCashBalance, user.biltCashMonthlyCap),
    totalPrice
  );

  // 2. Split remaining between cash and points
  const afterCredits = totalPrice - creditsApplied;
  const cashAmount = Math.round(afterCredits * (cashPercent / 100) * 100) / 100;
  const pointsAmount = afterCredits - cashAmount;

  // 3. Points consumed at portal rate (1.25 cents per point)
  const pointsUsed = Math.round(pointsAmount / PORTAL_RATE);

  // 4. Out of pocket is always total minus credits (regardless of cash/points split)
  const outOfPocket = afterCredits;

  // 5. Penalty: ANY points redeemed => bonus points = 0
  // Bonus is earned on out-of-pocket amount (after credits)
  const hasPenalty = pointsUsed > 0;
  const maxBonusPoints = Math.round(outOfPocket * user.hotelEarnRate);
  const bonusPointsEarned = hasPenalty ? 0 : maxBonusPoints;
  const bonusPointsValue = Math.round((bonusPointsEarned * POINTS_VALUE_CENTS) / 100);
  const maxBonusPointsValue = Math.round((maxBonusPoints * POINTS_VALUE_CENTS) / 100);

  // 6. Transfer comparison
  let transferComparison: TransferComparisonResult;
  const portalPointsCost = Math.round(totalPrice / PORTAL_RATE);

  if (hotel.transferPartner) {
    const partner = hotel.transferPartner;
    const centsPerPoint = (totalPrice / partner.totalAwardCost) * 100;
    const pointsSaved = portalPointsCost - partner.totalAwardCost;

    transferComparison = {
      hasTransferPartner: true,
      partnerName: partner.name,
      awardPointsCost: partner.totalAwardCost,
      portalPointsCost,
      pointsSaved,
      centsPerPoint: Math.round(centsPerPoint * 100) / 100,
      recommendation: centsPerPoint > 1.25 ? "transfer" : "portal",
      recommendationText:
        centsPerPoint > 1.25
          ? `Transfer to ${partner.name} and save ~${pointsSaved.toLocaleString()} points`
          : "Book through the portal for the best value",
      userHasEnoughPoints: user.pointsBalance >= partner.totalAwardCost,
    };
  } else {
    transferComparison = {
      hasTransferPartner: false,
      partnerName: "",
      awardPointsCost: 0,
      portalPointsCost,
      pointsSaved: 0,
      centsPerPoint: 0,
      recommendation: "portal",
      recommendationText: "Portal is your best option — no transfer partner available for this property",
      userHasEnoughPoints: true,
    };
  }

  // 7. Rent tier calculation
  const projectedSpend = user.everydaySpendThisCycle + totalPrice;
  const currentRatio = user.everydaySpendThisCycle / user.monthlyRent;
  const projectedRatio = projectedSpend / user.monthlyRent;
  const currentMult = getTierMultiplier(currentRatio);
  const projectedMult = getTierMultiplier(projectedRatio);

  const nextThreshold = getNextTierThreshold(projectedRatio);
  const spendToNextTier =
    nextThreshold !== null
      ? Math.round(nextThreshold * user.monthlyRent - projectedSpend)
      : null;

  const rentTier: RentTierResult = {
    currentSpend: user.everydaySpendThisCycle,
    projectedSpend,
    monthlyRent: user.monthlyRent,
    currentRatio,
    projectedRatio: Math.min(projectedRatio, 1.5), // cap display at 150%
    currentMultiplier: currentMult,
    projectedMultiplier: projectedMult,
    isUpgrade: projectedMult > currentMult,
    spendToNextTier: spendToNextTier !== null && spendToNextTier > 0 ? spendToNextTier : null,
  };

  return {
    cashPercent,
    cashAmount,
    pointsAmount,
    pointsUsed,
    creditsApplied,
    outOfPocket,
    bonusPointsEarned,
    maxBonusPoints,
    bonusPointsValue,
    maxBonusPointsValue,
    hasPenalty,
    transferComparison,
    rentTier,
  };
}

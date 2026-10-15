export interface UserProfile {
  cardTier: "Palladium" | "Platinum" | "Gold" | "Blue";
  annualFee: number;
  pointsBalance: number;
  hotelCreditRemaining: number;
  biltCashBalance: number;
  biltCashMonthlyCap: number;
  totalCreditsAvailable: number;
  rewardsOption: "housing-only" | "standard";
  monthlyRent: number;
  everydaySpendThisCycle: number;
  hotelEarnRate: number;
}

export interface HotelSummary {
  slug: string;
  name: string;
  location: string;
  starRating: number;
  pricePerNight: number;
  originalPrice: number;
  pointsPerNight: number;
  imageUrl: string;
  isClickable: boolean;
  coordinates: { lat: number; lng: number };
}

export interface HotelDetail extends HotelSummary {
  heroImage: string;
  thumbnails: string[];
  totalPhotoCount: number;
  description: string;
  amenities: Amenity[];
  rooms: RoomOption[];
  memberBenefits: MemberBenefit[];
  transferPartner: TransferPartner | null;
  chainName: string | null;
  loyaltyCategory: string | null;
}

export interface Amenity {
  icon: string;
  label: string;
}

export interface RoomOption {
  name: string;
  imageUrl: string;
  pricePerNight: number;
  pointsPerNight: number;
  bedType: string;
}

export interface MemberBenefit {
  icon: string;
  title: string;
  description: string;
  isNew?: boolean;
}

export interface TransferPartner {
  name: string;
  program: string;
  transferRatio: number;
  awardCostPerNight: number;
  totalAwardCost: number;
}

export interface SmartInsightsState {
  cashPercent: number;
  cashAmount: number;
  pointsAmount: number;
  pointsUsed: number;
  creditsApplied: number;
  outOfPocket: number;
  bonusPointsEarned: number;
  maxBonusPoints: number;
  bonusPointsValue: number;
  maxBonusPointsValue: number;
  hasPenalty: boolean;
  transferComparison: TransferComparisonResult;
  rentTier: RentTierResult;
}

export interface TransferComparisonResult {
  hasTransferPartner: boolean;
  partnerName: string;
  awardPointsCost: number;
  portalPointsCost: number;
  pointsSaved: number;
  centsPerPoint: number;
  recommendation: "portal" | "transfer";
  recommendationText: string;
  userHasEnoughPoints: boolean;
}

export interface RentTierResult {
  currentSpend: number;
  projectedSpend: number;
  monthlyRent: number;
  currentRatio: number;
  projectedRatio: number;
  currentMultiplier: TierMultiplier;
  projectedMultiplier: TierMultiplier;
  isUpgrade: boolean;
  spendToNextTier: number | null;
}

export type TierMultiplier = 0.5 | 0.75 | 1.0 | 1.25;

export interface BookingContext {
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  totalCashPrice: number;
}

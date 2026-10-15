"use client";

import type { HotelDetail, UserProfile } from "@/lib/types";
import { useSmartInsights } from "@/hooks/useSmartInsights";
import SmartInsightsToggle from "./SmartInsightsToggle";
import PaymentSlider from "./PaymentSlider";
import EarningsSummary from "./EarningsSummary";
import TransferComparison from "./TransferComparison";
import RentTierProgress from "./RentTierProgress";

interface SmartInsightsPanelProps {
  hotel: HotelDetail;
  userProfile: UserProfile;
}

export default function SmartInsightsPanel({
  hotel,
  userProfile,
}: SmartInsightsPanelProps) {
  const { isOpen, toggleOpen, setCashPercent, insights, bookingContext } =
    useSmartInsights(hotel, userProfile);

  const totalPrice = bookingContext.totalCashPrice;

  return (
    <div className="bg-white rounded-2xl shadow-panel overflow-hidden">
      {/* Toggle */}
      <SmartInsightsToggle isOpen={isOpen} onToggle={toggleOpen} />

      {/* Collapsible content */}
      <div
        className="transition-all duration-400 ease-in-out overflow-hidden"
        style={{
          maxHeight: isOpen ? "2000px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-5 pb-5 pt-2 space-y-0">
          {/* 1. Payment Method */}
          <div className="py-4">
            <PaymentSlider
              cashPercent={insights.cashPercent}
              hasPenalty={insights.hasPenalty}
              maxBonusPoints={insights.maxBonusPoints}
              maxBonusPointsValue={insights.maxBonusPointsValue}
              onSliderChange={setCashPercent}
            />
          </div>

          <div className="border-t border-gray-100" />

          {/* 2. Your Earnings */}
          <div className="py-4">
            <EarningsSummary
              creditsApplied={insights.creditsApplied}
              outOfPocket={insights.outOfPocket}
              bonusPointsEarned={insights.bonusPointsEarned}
              maxBonusPoints={insights.maxBonusPoints}
              bonusPointsValue={insights.bonusPointsValue}
              hasPenalty={insights.hasPenalty}
              totalPrice={totalPrice}
              earnRate={userProfile.hotelEarnRate}
            />
          </div>

          <div className="border-t border-gray-100" />

          {/* 3. Transfer Comparison */}
          <div className="py-4">
            <TransferComparison
              transferComparison={insights.transferComparison}
            />
          </div>

          <div className="border-t border-gray-100" />

          {/* 4. Rent Tier Progress */}
          <div className="py-4">
            <RentTierProgress rentTier={insights.rentTier} />
          </div>
        </div>
      </div>
    </div>
  );
}

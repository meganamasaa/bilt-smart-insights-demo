"use client";

import type { RentTierResult } from "@/lib/types";
import { TIER_THRESHOLDS } from "@/lib/constants";

interface RentTierProgressProps {
  rentTier: RentTierResult;
}

function formatCurrency(value: number): string {
  return `$${value.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

export default function RentTierProgress({ rentTier }: RentTierProgressProps) {
  const {
    currentSpend,
    projectedSpend,
    monthlyRent,
    currentRatio,
    projectedRatio,
    currentMultiplier,
    projectedMultiplier,
    isUpgrade,
    spendToNextTier,
  } = rentTier;

  // Clamp the display percentages to [0, 100] for the bar
  const currentPercent = Math.min(Math.max(currentRatio * 100, 0), 100);
  const projectedPercent = Math.min(Math.max(projectedRatio * 100, 0), 100);

  return (
    <div>
      <h4 className="text-sm font-bold text-bilt-black mb-3">
        Rent tier impact
      </h4>

      {/* Progress bar */}
      <div className="relative mb-4">
        {/* Bar container */}
        <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
          {/* Projected spend fill (lighter, behind current) */}
          <div
            className="absolute top-0 left-0 h-full bg-bilt-teal/25 rounded-full transition-all duration-500"
            style={{ width: `${projectedPercent}%` }}
          />
          {/* Current spend fill (solid) */}
          <div
            className="absolute top-0 left-0 h-full bg-bilt-teal rounded-full transition-all duration-500"
            style={{ width: `${currentPercent}%` }}
          />
        </div>

        {/* Tier threshold markers */}
        <div className="relative h-5 mt-1">
          {TIER_THRESHOLDS.map((tier) => {
            const leftPercent = tier.ratio * 100;
            return (
              <div
                key={tier.label}
                className="absolute flex flex-col items-center"
                style={{
                  left: `${leftPercent}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <div className="w-px h-2 bg-gray-300" />
                <span className="text-[10px] text-bilt-gray font-medium mt-0.5">
                  {tier.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Spend details */}
      <div className="flex justify-between text-xs mb-3">
        <div>
          <span className="text-bilt-gray">Current: </span>
          <span className="font-semibold text-bilt-black">
            {formatCurrency(currentSpend)} spent ({Math.round(currentRatio * 100)}%)
          </span>
        </div>
        <div className="text-right">
          <span className="text-bilt-gray">After booking: </span>
          <span className="font-semibold text-bilt-teal">
            {formatCurrency(projectedSpend)} ({Math.round(projectedRatio * 100)}%)
          </span>
        </div>
      </div>

      {/* Tier upgrade highlight */}
      {isUpgrade && (
        <div className="bg-bilt-green-light rounded-lg px-4 py-3 mb-3">
          <div className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-bilt-green"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <div>
              <p className="text-sm font-bold text-bilt-green">
                Tier upgrade! {currentMultiplier}x &rarr; {projectedMultiplier}x
              </p>
              <p className="text-xs text-bilt-gray mt-0.5">
                Your rent points multiplier increases with this booking
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Spend to next tier */}
      {spendToNextTier !== null && (
        <div className="bg-gray-50 rounded-lg px-4 py-2.5">
          <p className="text-xs text-bilt-gray">
            Spend{" "}
            <span className="font-semibold text-bilt-black">
              {formatCurrency(spendToNextTier)}
            </span>{" "}
            more to reach the next tier
          </p>
        </div>
      )}
    </div>
  );
}

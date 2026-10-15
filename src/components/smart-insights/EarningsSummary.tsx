"use client";

interface EarningsSummaryProps {
  creditsApplied: number;
  outOfPocket: number;
  bonusPointsEarned: number;
  maxBonusPoints: number;
  bonusPointsValue: number;
  hasPenalty: boolean;
  totalPrice: number;
  earnRate: number;
}

function fmt(value: number): string {
  return `$${value.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

export default function EarningsSummary({
  creditsApplied,
  outOfPocket,
  bonusPointsEarned,
  bonusPointsValue,
  hasPenalty,
  totalPrice,
  earnRate,
}: EarningsSummaryProps) {
  return (
    <div>
      <h4 className="text-sm font-bold text-bilt-black mb-3">Your earnings</h4>

      <div className="space-y-2.5">
        {/* Total */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-bilt-gray">Total (2 nights)</span>
          <span className="text-sm text-bilt-black">{fmt(totalPrice)}</span>
        </div>

        {/* Credits */}
        {creditsApplied > 0 && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-bilt-gray">Credits applied</span>
            <span className="text-sm text-bilt-green">-{fmt(creditsApplied)}</span>
          </div>
        )}

        {/* You pay */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-bilt-black">You pay</span>
          <span className="text-sm font-bold text-bilt-black">{fmt(outOfPocket)}</span>
        </div>

        {/* Bonus points */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-bilt-gray">Bonus points ({earnRate}x)</span>
          {hasPenalty ? (
            <span className="text-sm font-semibold text-bilt-amber">
              0 pts &#9888;
            </span>
          ) : (
            <span className="text-sm font-semibold text-bilt-teal">
              +{bonusPointsEarned.toLocaleString()} pts
            </span>
          )}
        </div>

        {/* Worth */}
        {!hasPenalty && bonusPointsValue > 0 && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-bilt-gray">Worth</span>
            <span className="text-sm text-bilt-black">~{fmt(bonusPointsValue)}</span>
          </div>
        )}
      </div>
    </div>
  );
}

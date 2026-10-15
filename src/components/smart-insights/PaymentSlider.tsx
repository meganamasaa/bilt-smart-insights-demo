"use client";

interface PaymentSliderProps {
  cashPercent: number;
  hasPenalty: boolean;
  maxBonusPoints: number;
  maxBonusPointsValue: number;
  onSliderChange: (value: number) => void;
}

export default function PaymentSlider({
  cashPercent,
  hasPenalty,
  maxBonusPoints,
  maxBonusPointsValue,
  onSliderChange,
}: PaymentSliderProps) {
  const pointsPercent = 100 - cashPercent;
  const label = cashPercent === 100 ? "All Cash" : cashPercent === 0 ? "All Points" : `${pointsPercent}% Points`;

  // Slider value is pointsPercent (0 = all cash on left, 100 = all points on right)
  const sliderValue = pointsPercent;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-bold text-bilt-black">Payment method</h4>
        <span className={`text-sm font-semibold ${hasPenalty ? "text-bilt-amber" : "text-bilt-teal"}`}>
          {label}
        </span>
      </div>

      {/* Slider */}
      <div className="mb-2">
        <input
          type="range"
          min={0}
          max={100}
          value={sliderValue}
          onChange={(e) => onSliderChange(100 - Number(e.target.value))}
          className={`w-full cursor-pointer ${pointsPercent >= 50 ? "thumb-amber" : ""}`}
          style={{
            background: `linear-gradient(to right, #c4520a ${sliderValue}%, #2d6a5a ${sliderValue}%)`,
          }}
        />
        <div className="flex justify-between mt-1">
          <span className="text-xs text-bilt-gray">All Cash</span>
          <span className="text-xs text-bilt-gray">All Points</span>
        </div>
      </div>

      {/* Penalty warning */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          hasPenalty ? "max-h-24 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="bg-bilt-amber-light rounded-lg px-4 py-3">
          <p className="text-xs text-bilt-amber">
            <span className="font-bold">&#9888; Splitting with points cancels <em>all</em> bonus earning.</span>{" "}
            You lose <strong>{maxBonusPoints.toLocaleString()} pts</strong> (~${maxBonusPointsValue}).
          </p>
        </div>
      </div>
    </div>
  );
}

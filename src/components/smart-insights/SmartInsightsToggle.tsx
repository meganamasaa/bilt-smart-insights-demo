"use client";

interface SmartInsightsToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function SmartInsightsToggle({
  isOpen,
  onToggle,
}: SmartInsightsToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-card hover:shadow-card-hover transition-shadow duration-200 cursor-pointer group"
    >
      <div className="flex items-center gap-2.5">
        {/* Sparkle / lightbulb icon */}
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-bilt-teal-light">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-bilt-teal"
          >
            <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" />
          </svg>
        </div>
        <span className="text-sm font-semibold text-bilt-black">
          Smart Insights
        </span>
      </div>

      {/* Chevron */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`text-bilt-gray transition-transform duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
}

import type { MemberBenefit } from "@/lib/types";

interface MemberBenefitsProps {
  benefits: MemberBenefit[];
  creditsAvailable: number;
}

function BenefitIcon({ icon }: { icon: string }) {
  if (icon === "points-2x" || icon === "points-redeem") {
    // Green checkmark circle
    return (
      <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-bilt-green-light">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-bilt-green"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    );
  }

  // Fallback icon
  return (
    <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-bilt-teal-light">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-bilt-teal"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    </div>
  );
}

export default function MemberBenefits({
  benefits,
  creditsAvailable,
}: MemberBenefitsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-card p-6">
      <h3 className="text-lg font-bold text-bilt-black mb-4">
        Your member benefits
      </h3>

      {/* Benefits list */}
      <div className="space-y-4">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <BenefitIcon icon={benefit.icon} />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-bilt-black">
                {benefit.title}
              </p>
              <p className="text-xs text-bilt-gray mt-0.5">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Credits callout */}
      {creditsAvailable > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-bilt-teal-light">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-bilt-teal"
              >
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-bilt-teal">
                ${creditsAvailable} in credits available
              </p>
              <p className="text-xs text-bilt-gray mt-0.5">
                Hotel credit + Bilt Cash at checkout
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import type { Amenity } from "@/lib/types";

interface AboutPropertyProps {
  description: string;
  amenities: Amenity[];
}

function AmenityIcon({ icon }: { icon: string }) {
  const iconProps = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "text-bilt-gray",
  };

  switch (icon) {
    case "car":
      return (
        <svg {...iconProps}>
          <path d="M5 17h14v-5H5z" />
          <path d="M19 12l-1.5-4.5A2 2 0 0 0 15.6 6H8.4a2 2 0 0 0-1.9 1.5L5 12" />
          <circle cx="7.5" cy="17" r="1" />
          <circle cx="16.5" cy="17" r="1" />
          <path d="M5 17v2" />
          <path d="M19 17v2" />
        </svg>
      );
    case "concierge-bell":
      return (
        <svg {...iconProps}>
          <path d="M3 20h18" />
          <path d="M4 20a8 8 0 0 1 16 0" />
          <path d="M12 4v4" />
          <circle cx="12" cy="4" r="1" />
        </svg>
      );
    case "shirt":
      return (
        <svg {...iconProps}>
          <path d="M20.38 3.46 16 2 12 5 8 2 3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
        </svg>
      );
    case "dumbbell":
      return (
        <svg {...iconProps}>
          <path d="M6.5 6.5h11" />
          <path d="M6.5 17.5h11" />
          <path d="M6.5 6.5v11" />
          <path d="M17.5 6.5v11" />
          <path d="M4 8v8" />
          <path d="M20 8v8" />
          <path d="M2 10v4" />
          <path d="M22 10v4" />
        </svg>
      );
    case "clock":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case "accessibility":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="4.5" r="1.5" />
          <path d="M12 7v5" />
          <path d="M8 9.5h8" />
          <path d="M9 18l3-6 3 6" />
        </svg>
      );
    case "wifi":
      return (
        <svg {...iconProps}>
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <circle cx="12" cy="20" r="1" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

export default function AboutProperty({
  description,
  amenities,
}: AboutPropertyProps) {
  return (
    <section>
      <h2 className="text-xl font-bold text-bilt-black mb-3">
        About the property
      </h2>

      {/* Description */}
      <p className="text-sm text-bilt-gray leading-relaxed">
        {description}
        <button className="text-bilt-teal font-medium hover:text-bilt-teal-dark transition-colors ml-1">
          more
        </button>
      </p>

      {/* Amenity grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4 mt-6">
        {amenities.map((amenity, idx) => (
          <div key={idx} className="flex items-center gap-2.5">
            <AmenityIcon icon={amenity.icon} />
            <span className="text-sm text-bilt-black">{amenity.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

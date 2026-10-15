"use client";

function ChevronDownIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function HouseIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

interface FilterPill {
  label: string;
  hasChevron: boolean;
  isActive: boolean;
  icon?: React.ReactNode;
}

const filters: FilterPill[] = [
  { label: "Sort", hasChevron: true, isActive: false },
  { label: "Price", hasChevron: true, isActive: false },
  { label: "Rating", hasChevron: true, isActive: true },
  { label: "Amenities", hasChevron: true, isActive: false },
  { label: "Home Away from Home", hasChevron: false, isActive: false, icon: <HouseIcon /> },
];

export default function FilterBar() {
  return (
    <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
      {filters.map((filter) => (
        <button
          key={filter.label}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
            filter.isActive
              ? "bg-bilt-teal text-white border border-bilt-teal"
              : "bg-white text-bilt-black border border-gray-300 hover:border-gray-400"
          }`}
        >
          {filter.icon && <span className="flex-shrink-0">{filter.icon}</span>}
          <span>{filter.label}</span>
          {filter.hasChevron && <ChevronDownIcon />}
        </button>
      ))}
    </div>
  );
}

"use client";

interface PriceMarker {
  price: string;
  isBiltRate: boolean;
  top: string;
  left: string;
  isLarge: boolean;
}

const priceMarkers: PriceMarker[] = [
  { price: "$647", isBiltRate: true, top: "35%", left: "30%", isLarge: true },
  { price: "$285", isBiltRate: true, top: "28%", left: "55%", isLarge: true },
  { price: "$794", isBiltRate: true, top: "55%", left: "65%", isLarge: true },
  { price: "$904", isBiltRate: false, top: "22%", left: "42%", isLarge: false },
  { price: "$674", isBiltRate: false, top: "45%", left: "20%", isLarge: false },
  { price: "$450", isBiltRate: false, top: "65%", left: "40%", isLarge: false },
  { price: "$320", isBiltRate: false, top: "48%", left: "78%", isLarge: false },
];

function CloseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function MapPanel() {
  return (
    <div className="relative w-full h-full min-h-[calc(100vh-64px)] rounded-l-2xl overflow-hidden">
      {/* Map background with subtle styling */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8f0e8] via-[#eef4ee] to-[#e4ece4]">
        {/* Faux street grid lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.12]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Horizontal streets */}
          <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#6b8068" strokeWidth="2" />
          <line x1="0" y1="35%" x2="100%" y2="36%" stroke="#6b8068" strokeWidth="1.5" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#6b8068" strokeWidth="2" />
          <line x1="0" y1="65%" x2="100%" y2="64%" stroke="#6b8068" strokeWidth="1.5" />
          <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#6b8068" strokeWidth="2" />

          {/* Vertical streets */}
          <line x1="15%" y1="0" x2="15%" y2="100%" stroke="#6b8068" strokeWidth="1.5" />
          <line x1="35%" y1="0" x2="35%" y2="100%" stroke="#6b8068" strokeWidth="2" />
          <line x1="55%" y1="0" x2="55%" y2="100%" stroke="#6b8068" strokeWidth="1.5" />
          <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#6b8068" strokeWidth="2" />
          <line x1="90%" y1="0" x2="90%" y2="100%" stroke="#6b8068" strokeWidth="1" />

          {/* Diagonal avenue */}
          <line x1="10%" y1="0" x2="85%" y2="100%" stroke="#6b8068" strokeWidth="2.5" />

          {/* Park-like areas */}
          <rect x="40%" y="70%" width="15%" height="12%" rx="6" fill="#6b8068" opacity="0.3" />
          <rect x="60%" y="15%" width="10%" height="8%" rx="4" fill="#6b8068" opacity="0.2" />
        </svg>

        {/* Water area at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-gradient-to-t from-[#c8dbe8] to-transparent opacity-40" />
      </div>

      {/* Hide map button */}
      <button className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-card text-sm font-medium text-bilt-black hover:shadow-card-hover transition-shadow duration-200">
        <CloseIcon />
        <span>Hide map</span>
      </button>

      {/* Price markers */}
      {priceMarkers.map((marker) => (
        <div
          key={`${marker.price}-${marker.top}-${marker.left}`}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-[5]"
          style={{ top: marker.top, left: marker.left }}
        >
          <div
            className={`flex items-center gap-1 rounded-full shadow-card whitespace-nowrap ${
              marker.isLarge
                ? "px-3 py-1.5 bg-white text-sm font-bold text-bilt-black border border-gray-200"
                : "px-2 py-1 bg-white/90 text-xs font-medium text-bilt-gray border border-gray-100"
            }`}
          >
            {marker.isBiltRate && marker.isLarge && (
              <span className="w-1.5 h-1.5 rounded-full bg-bilt-teal flex-shrink-0" />
            )}
            <span>{marker.price}</span>
          </div>
        </div>
      ))}

      {/* Zoom controls */}
      <div className="absolute bottom-6 right-4 z-10 flex flex-col gap-0.5">
        <button className="w-8 h-8 flex items-center justify-center bg-white rounded-t-lg shadow-card text-bilt-black text-lg font-light hover:bg-gray-50 transition-colors">
          +
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-white rounded-b-lg shadow-card text-bilt-black text-lg font-light hover:bg-gray-50 transition-colors">
          &minus;
        </button>
      </div>
    </div>
  );
}

import { DEFAULT_CHECK_IN, DEFAULT_CHECK_OUT, DEFAULT_GUESTS } from "@/lib/constants";

interface PriceCardProps {
  pricePerNight: number;
  pointsPerNight: number;
}

export default function PriceCard({
  pricePerNight,
  pointsPerNight,
}: PriceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-card p-6">
      {/* Price display */}
      <div className="mb-5">
        <span className="text-xs text-bilt-gray font-medium uppercase tracking-wide">
          From
        </span>
        <div className="flex items-baseline gap-1 mt-0.5">
          <span className="text-3xl font-bold text-bilt-black">
            ${pricePerNight.toLocaleString()}
          </span>
        </div>
        <p className="text-sm text-bilt-gray mt-1">
          or {pointsPerNight.toLocaleString()} pts per night
        </p>
      </div>

      {/* Check-in / Check-out / Guests row */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        <div className="border border-gray-200 rounded-xl px-3 py-2.5 text-center">
          <span className="block text-[10px] text-bilt-gray font-medium uppercase tracking-wide">
            Check in
          </span>
          <span className="block text-sm font-semibold text-bilt-black mt-0.5">
            {DEFAULT_CHECK_IN}
          </span>
        </div>
        <div className="border border-gray-200 rounded-xl px-3 py-2.5 text-center">
          <span className="block text-[10px] text-bilt-gray font-medium uppercase tracking-wide">
            Check out
          </span>
          <span className="block text-sm font-semibold text-bilt-black mt-0.5">
            {DEFAULT_CHECK_OUT}
          </span>
        </div>
        <div className="border border-gray-200 rounded-xl px-3 py-2.5 text-center">
          <span className="block text-[10px] text-bilt-gray font-medium uppercase tracking-wide">
            Guests
          </span>
          <span className="block text-sm font-semibold text-bilt-black mt-0.5">
            {DEFAULT_GUESTS}
          </span>
        </div>
      </div>

      {/* Select room button */}
      <button className="w-full bg-bilt-teal hover:bg-bilt-teal-dark text-white font-semibold text-sm py-3.5 rounded-xl transition-colors duration-200">
        Select room
      </button>
    </div>
  );
}

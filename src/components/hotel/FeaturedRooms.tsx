import Image from "next/image";
import type { RoomOption } from "@/lib/types";

interface FeaturedRoomsProps {
  rooms: RoomOption[];
}

export default function FeaturedRooms({ rooms }: FeaturedRoomsProps) {
  return (
    <section>
      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-bilt-black">Featured rooms</h2>
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-bilt-teal hover:text-bilt-teal-dark transition-colors">
            View all
          </button>
          <div className="flex items-center gap-1.5">
            <button
              className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 text-bilt-gray hover:border-bilt-teal hover:text-bilt-teal transition-colors"
              aria-label="Previous rooms"
            >
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
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 text-bilt-gray hover:border-bilt-teal hover:text-bilt-teal transition-colors"
              aria-label="Next rooms"
            >
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
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Room cards — horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {rooms.map((room, idx) => (
          <div
            key={idx}
            className="min-w-[260px] max-w-[300px] flex-shrink-0 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-200 overflow-hidden"
          >
            {/* Room image */}
            <div className="relative w-full h-44">
              <Image
                src={room.imageUrl}
                alt={room.name}
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            {/* Room info */}
            <div className="p-4">
              <h3 className="text-base font-semibold text-bilt-black">
                {room.name}
              </h3>

              {/* Bed type */}
              <div className="flex items-center gap-1.5 mt-1.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-bilt-gray"
                >
                  <path d="M2 4v16" />
                  <path d="M2 8h18a2 2 0 0 1 2 2v10" />
                  <path d="M2 17h20" />
                  <path d="M6 8v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
                </svg>
                <span className="text-sm text-bilt-gray">{room.bedType}</span>
              </div>

              {/* Price */}
              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-bilt-black">
                    ${room.pricePerNight}
                  </span>
                  <span className="text-xs text-bilt-gray">/ night</span>
                </div>
                <p className="text-xs text-bilt-gray mt-0.5">
                  or {room.pointsPerNight.toLocaleString()} pts / night
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

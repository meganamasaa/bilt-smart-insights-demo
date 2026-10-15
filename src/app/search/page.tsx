import BiltNavbar from "@/components/layout/BiltNavbar";
import FilterBar from "@/components/search/FilterBar";
import HotelCard from "@/components/search/HotelCard";
import MapPanel from "@/components/search/MapPanel";
import { SEARCH_RESULTS } from "@/lib/hotelData";

export default function SearchPage() {
  return (
    <>
      <BiltNavbar />
      <main className="flex min-h-[calc(100vh-64px)]">
        {/* Left side — filters and hotel list */}
        <div className="w-[60%] px-6 pb-8">
          <FilterBar />
          <div className="flex flex-col gap-4">
            {SEARCH_RESULTS.map((hotel) => (
              <HotelCard key={hotel.slug} hotel={hotel} />
            ))}
          </div>
        </div>

        {/* Right side — sticky map panel */}
        <div className="w-[40%] sticky top-16 h-[calc(100vh-64px)]">
          <MapPanel />
        </div>
      </main>
    </>
  );
}

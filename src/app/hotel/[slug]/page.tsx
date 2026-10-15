"use client";

import { use, useState } from "react";
import { redirect } from "next/navigation";
import BiltNavbar from "@/components/layout/BiltNavbar";
import PhotoGallery from "@/components/hotel/PhotoGallery";
import PriceCard from "@/components/hotel/PriceCard";
import FeaturedRooms from "@/components/hotel/FeaturedRooms";
import MemberBenefits from "@/components/hotel/MemberBenefits";
import SmartInsightsPanel from "@/components/smart-insights/SmartInsightsPanel";
import AboutProperty from "@/components/hotel/AboutProperty";
import HotelMap from "@/components/hotel/HotelMap";
import { HOTEL_DETAILS } from "@/lib/hotelData";
import { USER_PROFILE } from "@/lib/userProfile";

export default function HotelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const hotel = HOTEL_DETAILS[slug];

  if (!hotel) {
    redirect("/search");
  }

  const [activeTab, setActiveTab] = useState<"overview" | "rooms">("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      <BiltNavbar />

      <main className="max-w-7xl mx-auto">
        {/* Photo Gallery — full width */}
        <div className="px-4 sm:px-6 lg:px-8 pt-4">
          <PhotoGallery
            heroImage={hotel.heroImage}
            thumbnails={hotel.thumbnails}
            totalPhotoCount={hotel.totalPhotoCount}
          />
        </div>

        {/* Content area */}
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          {/* Hotel name, location, stars */}
          <div className="mb-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-bilt-black">
              {hotel.name}
            </h1>

            <div className="flex items-center gap-3 mt-2">
              {/* Location */}
              <div className="flex items-center gap-1 text-bilt-gray">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm">
                  {hotel.location}, USA
                </span>
              </div>

              {/* Star rating */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: hotel.starRating }).map((_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-amber-400"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Overview / Rooms tabs */}
          <div className="flex items-center gap-1 border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors duration-200 ${
                activeTab === "overview"
                  ? "border-bilt-teal text-bilt-teal"
                  : "border-transparent text-bilt-gray hover:text-bilt-black"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("rooms")}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors duration-200 ${
                activeTab === "rooms"
                  ? "border-bilt-teal text-bilt-teal"
                  : "border-transparent text-bilt-gray hover:text-bilt-black"
              }`}
            >
              Rooms
            </button>
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* LEFT column — ~65% */}
            <div className="flex-1 lg:max-w-[65%] space-y-10">
              <FeaturedRooms rooms={hotel.rooms} />
              <AboutProperty
                description={hotel.description}
                amenities={hotel.amenities}
              />
              <HotelMap />
            </div>

            {/* RIGHT sidebar — ~35% */}
            <div className="w-full lg:w-[35%] lg:min-w-[340px] space-y-5">
              <PriceCard
                pricePerNight={hotel.pricePerNight}
                pointsPerNight={hotel.pointsPerNight}
              />
              <MemberBenefits
                benefits={hotel.memberBenefits}
                creditsAvailable={USER_PROFILE.totalCreditsAvailable}
              />
              <SmartInsightsPanel hotel={hotel} userProfile={USER_PROFILE} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";

import { useRef } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Icon helpers                                                       */
/* ------------------------------------------------------------------ */

function StarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function HotelIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M3 7v14M21 7v14M6 11h4M6 15h4M14 11h4M14 15h4M9 21V7l3-4 3 4v14" />
    </svg>
  );
}

function FlightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

function BladeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function TransferIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bilt-gray">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bilt-gray">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const searchTabs = [
  { label: "Hotels", icon: <HotelIcon />, active: true },
  { label: "Flights", icon: <FlightIcon />, active: false },
  { label: "Blade", icon: <BladeIcon />, active: false },
  { label: "Transfer", icon: <TransferIcon />, active: false },
];

const benefits = [
  {
    title: "Daily breakfast for two",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: "Early check-in and late check-out",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Dedicated Virtuoso Travel Advisor",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Room upgrades on arrival",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
        <line x1="12" y1="9" x2="12" y2="21" />
        <path d="M3 3h18" />
      </svg>
    ),
  },
  {
    title: "$100 property credit",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6M12 16v6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M16 12h6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24" />
      </svg>
    ),
  },
];

const collectionTags = [
  { label: "New Additions", active: true },
  { label: "Cherry Blossom Season", active: false },
  { label: "Gilded Marshlands", active: false },
  { label: "White Outs & Black Diamonds", active: false },
  { label: "Azure Atolls", active: false },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-16">
      {/* ---- Sub-nav tabs ---- */}
      <div className="flex items-center gap-6 pt-4 pb-8 border-b-0">
        <button className="flex items-center gap-1.5 text-sm font-medium text-bilt-black border-b-2 border-bilt-black pb-1">
          <StarIcon className="w-3.5 h-3.5" />
          Travel rewards
        </button>
        <button className="flex items-center gap-1.5 text-sm font-medium text-bilt-gray pb-1 border-b-2 border-transparent hover:text-bilt-black transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
          Everyday rewards
        </button>
      </div>

      {/* ---- Heading ---- */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold leading-snug text-bilt-black">
          Redeem points for
        </h1>
        <h1 className="text-2xl sm:text-3xl font-semibold leading-snug text-bilt-teal">
          Hotels, flights, and more
        </h1>
      </div>

      {/* ---- Search card ---- */}
      <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
        {/* Search tabs — icons above labels */}
        <div className="flex items-end border-b border-gray-100">
          {searchTabs.map((tab) => (
            <button
              key={tab.label}
              className={`flex flex-col items-center gap-1.5 px-7 pt-5 pb-3 text-xs font-medium transition-colors relative ${
                tab.active
                  ? "text-bilt-black"
                  : "text-bilt-gray hover:text-bilt-black"
              }`}
            >
              <span className={tab.active ? "text-bilt-black" : "text-bilt-gray"}>{tab.icon}</span>
              {tab.label}
              {tab.active && (
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-bilt-black rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Guests display */}
        <div className="px-6 pt-4 pb-2">
          <div className="inline-flex items-center gap-2 text-sm text-bilt-gray">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            2 adults, 1 room
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

        {/* Search bar — unified row with dividers */}
        <div className="px-6 pb-6 pt-2">
          <div className="flex items-center rounded-xl border border-gray-200 overflow-hidden bg-white">
            {/* Location */}
            <div className="flex-2 flex items-center gap-3 px-5 py-4">
              <MapPinIcon />
              <span className="text-sm text-bilt-black">New York, NY</span>
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-gray-200 shrink-0" />

            {/* Check in */}
            <div className="flex-1 flex items-center gap-3 px-5 py-4">
              <CalendarIcon />
              <span className="text-sm text-bilt-black">Mar 20</span>
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-gray-200 shrink-0" />

            {/* Check out */}
            <div className="flex-1 flex items-center px-5 py-4">
              <span className="text-sm text-bilt-black">Mar 22</span>
            </div>

            {/* Search */}
            <Link
              href="/search"
              className="flex items-center px-8 py-4 text-sm text-bilt-gray hover:text-bilt-black transition-colors"
            >
              Search
            </Link>
          </div>
        </div>
      </div>

      {/* ---- HOME AWAY FROM HOME ---- */}
      <div className="mt-10">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 sm:p-8">
          {/* Logo + header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="shrink-0">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                <rect width="18" height="18" x="1" y="1" rx="2" stroke="#1a1a1a" strokeWidth="1.5" />
                <rect width="18" height="18" x="21" y="1" rx="2" stroke="#1a1a1a" strokeWidth="1.5" />
                <rect width="18" height="18" x="1" y="21" rx="2" stroke="#1a1a1a" strokeWidth="1.5" />
                <rect width="18" height="18" x="21" y="21" rx="2" stroke="#1a1a1a" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="text-[10px] font-bold tracking-[0.15em] text-bilt-black leading-tight uppercase">
              Home Away<br />from Home
            </div>
          </div>

          <p className="text-sm text-bilt-gray leading-relaxed mb-6 max-w-2xl">
            Gold and Platinum Members enjoy exclusive benefits worth over $300 per booking when you stay at a Home Away from Home property:
          </p>

          {/* Benefits row */}
          <div className="grid grid-cols-5 gap-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col items-center text-center gap-2.5 p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-bilt-gray">
                  {benefit.icon}
                </div>
                <p className="text-xs font-medium text-bilt-gray leading-snug">
                  {benefit.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---- Collection tags ---- */}
      <div className="mt-8 flex items-center gap-3">
        <div
          ref={scrollRef}
          className="flex items-center gap-2.5 overflow-x-auto scrollbar-hide flex-1"
        >
          {collectionTags.map((tag) => (
            <button
              key={tag.label}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shrink-0 ${
                tag.active
                  ? "bg-bilt-teal text-white"
                  : "bg-white text-bilt-gray border border-gray-200 hover:border-gray-300"
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => scroll("left")}
            className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-bilt-gray hover:text-bilt-black hover:border-gray-300 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-bilt-gray hover:text-bilt-black hover:border-gray-300 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

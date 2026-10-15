"use client";

import Image from "next/image";
import Link from "next/link";
import type { HotelSummary } from "@/lib/types";

function MapPinIcon() {
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
      className="w-3.5 h-3.5 flex-shrink-0"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 text-bilt-amber">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} filled={i < rating} />
      ))}
    </div>
  );
}

function formatPrice(price: number): string {
  return `$${price.toLocaleString()}`;
}

function formatPoints(points: number): string {
  return points.toLocaleString();
}

interface HotelCardProps {
  hotel: HotelSummary;
}

function CardContent({ hotel }: HotelCardProps) {
  const hasDiscount = hotel.originalPrice > hotel.pricePerNight;

  return (
    <div className="flex overflow-hidden rounded-xl bg-white shadow-card">
      {/* Image */}
      <div className="relative w-[40%] min-h-[200px] flex-shrink-0">
        <Image
          src={hotel.imageUrl}
          alt={hotel.name}
          fill
          unoptimized
          className="object-cover rounded-l-xl"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 p-5">
        {/* Left info */}
        <div className="flex flex-col flex-1 justify-center gap-1.5">
          <h3 className="text-lg font-semibold text-bilt-black leading-tight">
            {hotel.name}
          </h3>
          <div className="flex items-center gap-1 text-bilt-gray text-sm">
            <MapPinIcon />
            <span>{hotel.location}</span>
          </div>
          <StarRating rating={hotel.starRating} />
        </div>

        {/* Right pricing */}
        <div className="flex flex-col items-end justify-center gap-1 pl-4 min-w-[140px]">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-bilt-teal text-bilt-teal">
            Bilt rate
          </span>
          <div className="flex items-baseline gap-1.5">
            {hasDiscount && (
              <span className="text-sm text-bilt-gray line-through">
                {formatPrice(hotel.originalPrice)}
              </span>
            )}
            <span className="text-xl font-bold text-bilt-black">
              {formatPrice(hotel.pricePerNight)}
            </span>
          </div>
          <span className="text-xs text-bilt-gray">per night</span>
          <span className="text-xs text-bilt-gray">
            or {formatPoints(hotel.pointsPerNight)} pts per night
          </span>
        </div>
      </div>
    </div>
  );
}

export default function HotelCard({ hotel }: HotelCardProps) {
  if (hotel.isClickable) {
    return (
      <Link
        href={`/hotel/${hotel.slug}`}
        className="block transition-shadow duration-200 rounded-xl hover:shadow-card-hover"
      >
        <CardContent hotel={hotel} />
      </Link>
    );
  }

  return (
    <div className="opacity-80 cursor-default">
      <CardContent hotel={hotel} />
    </div>
  );
}

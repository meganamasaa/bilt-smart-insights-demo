"use client";

import { useState, useMemo } from "react";
import { calculateSmartInsights } from "@/lib/smartInsightsEngine";
import type { HotelDetail, UserProfile, SmartInsightsState, BookingContext } from "@/lib/types";
import { DEFAULT_NIGHTS } from "@/lib/constants";

export function useSmartInsights(hotel: HotelDetail, user: UserProfile) {
  const [cashPercent, setCashPercent] = useState(100);
  const [isOpen, setIsOpen] = useState(false);

  const bookingContext: BookingContext = useMemo(
    () => ({
      checkIn: "2026-03-20",
      checkOut: "2026-03-22",
      nights: DEFAULT_NIGHTS,
      guests: 2,
      totalCashPrice: hotel.pricePerNight * DEFAULT_NIGHTS,
    }),
    [hotel.pricePerNight]
  );

  const insights: SmartInsightsState = useMemo(
    () => calculateSmartInsights(cashPercent, bookingContext, hotel, user),
    [cashPercent, bookingContext, hotel, user]
  );

  return {
    isOpen,
    toggleOpen: () => setIsOpen((prev) => !prev),
    cashPercent,
    setCashPercent,
    insights,
    bookingContext,
  };
}

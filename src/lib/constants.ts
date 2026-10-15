import type { TierMultiplier } from "./types";

export const TIER_THRESHOLDS: { ratio: number; multiplier: TierMultiplier; label: string }[] = [
  { ratio: 0.25, multiplier: 0.5, label: "0.5x" },
  { ratio: 0.50, multiplier: 0.75, label: "0.75x" },
  { ratio: 0.75, multiplier: 1.0, label: "1.0x" },
  { ratio: 1.00, multiplier: 1.25, label: "1.25x" },
];

export const PORTAL_CENTS_PER_POINT = 1.25;
export const PORTAL_RATE = 0.0125; // dollars per point

export const POINTS_VALUE_CENTS = 2.2; // estimated value per point in cents

export const DEFAULT_CHECK_IN = "Mar 20";
export const DEFAULT_CHECK_OUT = "Mar 22";
export const DEFAULT_NIGHTS = 2;
export const DEFAULT_GUESTS = 2;

export const NAV_ITEMS = [
  { label: "Neighborhood", icon: "map-pin" },
  { label: "My Home", icon: "home" },
  { label: "Rewards", icon: "star", active: true },
  { label: "Bilt Card", icon: "credit-card" },
] as const;

export const COLLECTION_TAGS = [
  "New Additions",
  "Cherry Blossom Season",
  "Gilded Marshlands",
  "White Outs & Black Diamonds",
  "Azure Atolls",
] as const;

export const HOME_AWAY_BENEFITS = [
  { icon: "coffee", label: "Daily breakfast for two" },
  { icon: "clock", label: "Early check-in and late check-out" },
  { icon: "user-check", label: "Dedicated Virtuoso Travel Advisor" },
  { icon: "arrow-up-circle", label: "Room upgrades on arrival" },
  { icon: "dollar-sign", label: "$100 property credit" },
] as const;

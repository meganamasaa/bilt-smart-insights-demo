"use client";

import Link from "next/link";

const navItems = [
  {
    label: "Neighborhood",
    href: "#",
    active: false,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "My Home",
    href: "#",
    active: false,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "Rewards",
    href: "#",
    active: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    label: "Bilt Card",
    href: "#",
    active: false,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
];

export default function BiltNavbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left — Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="text-bilt-black">
              <rect x="1" y="1" width="7" height="7" rx="1.5" fill="currentColor" />
              <rect x="12" y="1" width="7" height="7" rx="1.5" fill="currentColor" />
              <rect x="1" y="12" width="7" height="7" rx="1.5" fill="currentColor" />
              <rect x="12" y="12" width="7" height="7" rx="1.5" fill="currentColor" />
            </svg>
            <span className="text-lg font-semibold tracking-[0.25em] text-bilt-black">
              BILT
            </span>
          </Link>

          {/* Center — Pill navigation */}
          <div className="hidden md:flex items-center rounded-full p-1 border border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  item.active
                    ? "bg-bilt-black text-white"
                    : "text-bilt-gray hover:text-bilt-black"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Right — Auth button */}
          <Link
            href="#"
            className="hidden sm:inline-flex items-center px-5 py-2 rounded-full border border-gray-800 text-bilt-black text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
          >
            Sign up / Log in
          </Link>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 rounded-lg text-bilt-gray hover:bg-gray-100" aria-label="Open menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

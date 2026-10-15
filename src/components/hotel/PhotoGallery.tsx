"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface PhotoGalleryProps {
  heroImage: string;
  thumbnails: string[];
  totalPhotoCount: number;
}

export default function PhotoGallery({
  heroImage,
  thumbnails,
  totalPhotoCount,
}: PhotoGalleryProps) {
  const router = useRouter();

  return (
    <div className="relative w-full">
      <div className="flex gap-1 h-[340px] sm:h-[400px] lg:h-[440px]">
        {/* Hero image — left ~60% */}
        <div className="relative w-[60%] h-full overflow-hidden rounded-l-2xl">
          <Image
            src={heroImage}
            alt="Hotel hero"
            fill
            unoptimized
            className="object-cover"
            priority
          />
        </div>

        {/* Thumbnail grid — right ~40% */}
        <div className="w-[40%] h-full grid grid-cols-2 grid-rows-2 gap-1">
          {thumbnails.slice(0, 4).map((thumb, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden ${
                idx === 1 ? "rounded-tr-2xl" : ""
              } ${idx === 3 ? "rounded-br-2xl" : ""}`}
            >
              <Image
                src={thumb}
                alt={`Hotel photo ${idx + 1}`}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Back button — top-left overlay */}
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 flex items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-card hover:bg-white transition-colors duration-200"
        aria-label="Go back"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-bilt-black"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Photo count badge — bottom-right overlay */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-white text-sm font-medium px-3 py-1.5 rounded-full">
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
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
        <span>{totalPhotoCount}</span>
      </div>
    </div>
  );
}

export default function HotelMap() {
  return (
    <section>
      <h2 className="text-xl font-bold text-bilt-black mb-3">Location</h2>

      {/* Map placeholder */}
      <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 via-gray-50 to-green-100 border border-gray-200">
        {/* Decorative road lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gray-200" />
          <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-gray-200" />
          <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-gray-200" />
          <div className="absolute left-2/3 top-0 bottom-0 w-[1px] bg-gray-200" />
        </div>

        {/* Pin marker */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
          <div className="relative">
            <svg
              width="32"
              height="40"
              viewBox="0 0 32 40"
              fill="none"
              className="drop-shadow-md"
            >
              <path
                d="M16 0C7.16 0 0 7.16 0 16c0 12 16 24 16 24s16-12 16-24C32 7.16 24.84 0 16 0z"
                fill="#2d6a5a"
              />
              <circle cx="16" cy="15" r="6" fill="white" />
            </svg>
          </div>
        </div>

        {/* Shadow beneath pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-0">
          <div className="w-4 h-1.5 bg-black/10 rounded-full blur-[1px]" />
        </div>
      </div>

      {/* Address */}
      <div className="flex items-start gap-2 mt-3">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-bilt-gray mt-0.5 flex-shrink-0"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <p className="text-sm text-bilt-gray">
          320 Pearl Street, Financial District, New York, NY 10038
        </p>
      </div>
    </section>
  );
}

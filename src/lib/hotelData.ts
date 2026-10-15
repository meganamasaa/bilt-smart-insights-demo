import type { HotelSummary, HotelDetail } from "./types";

export const SEARCH_RESULTS: HotelSummary[] = [
  {
    slug: "wall-street-hotel",
    name: "The Wall Street Hotel",
    location: "New York, NY",
    starRating: 5,
    pricePerNight: 647,
    originalPrice: 674,
    pointsPerNight: 51760,
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop",
    isClickable: false,
    coordinates: { lat: 40.7074, lng: -74.009 },
  },
  {
    slug: "artezen",
    name: "Artezen Hotel",
    location: "New York, NY",
    starRating: 4,
    pricePerNight: 285,
    originalPrice: 904,
    pointsPerNight: 22819,
    imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=500&fit=crop",
    isClickable: true,
    coordinates: { lat: 40.7105, lng: -74.007 },
  },
  {
    slug: "the-manner",
    name: "The Manner, The Unbound Collection by Hyatt",
    location: "New York, NY",
    starRating: 5,
    pricePerNight: 794,
    originalPrice: 794,
    pointsPerNight: 63531,
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop",
    isClickable: true,
    coordinates: { lat: 40.7185, lng: -73.9975 },
  },
];

export const HOTEL_DETAILS: Record<string, HotelDetail> = {
  artezen: {
    ...SEARCH_RESULTS[1],
    heroImage: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&h=700&fit=crop",
    thumbnails: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
    ],
    totalPhotoCount: 29,
    description:
      "With a stay at Artezen Hotel, you'll be centrally located in New York, just a 5-minute walk from Wall Street and 7 minutes by foot from One World Trade Center. This luxury hot...",
    chainName: null,
    loyaltyCategory: null,
    transferPartner: null,
    amenities: [
      { icon: "car", label: "Parking" },
      { icon: "concierge-bell", label: "Concierge" },
      { icon: "shirt", label: "Laundry Service" },
      { icon: "dumbbell", label: "Gym" },
      { icon: "clock", label: "24-Hour Front Desk" },
      { icon: "accessibility", label: "Wheelchair Access" },
    ],
    rooms: [
      {
        name: "Deluxe, Queen",
        imageUrl: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&h=350&fit=crop",
        pricePerNight: 285,
        pointsPerNight: 22819,
        bedType: "1 Queen Bed",
      },
      {
        name: "Deluxe, King",
        imageUrl: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&h=350&fit=crop",
        pricePerNight: 305,
        pointsPerNight: 24435,
        bedType: "1 King Bed",
      },
    ],
    memberBenefits: [
      {
        icon: "points-2x",
        title: "2X points on hotels",
        description: "When you book with any linked card",
      },
      {
        icon: "points-redeem",
        title: "Pay with points",
        description: "Redeem points toward any applicable trip",
      },
    ],
  },
  "the-manner": {
    ...SEARCH_RESULTS[2],
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=700&fit=crop",
    thumbnails: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop",
    ],
    totalPhotoCount: 31,
    description:
      "A stay at The Manner, The Unbound Collection by Hyatt places you in the heart of New York, within a 10-minute drive of Madison Square Garden and Empire State Building. This lu...",
    chainName: "Hyatt",
    loyaltyCategory: "Cat 8",
    transferPartner: {
      name: "World of Hyatt",
      program: "Hyatt",
      transferRatio: 1,
      awardCostPerNight: 40000,
      totalAwardCost: 80000,
    },
    amenities: [
      { icon: "accessibility", label: "Wheelchair Access" },
      { icon: "clock", label: "24-Hour Front Desk" },
      { icon: "shirt", label: "Laundry Service" },
      { icon: "wifi", label: "Wi-Fi" },
      { icon: "concierge-bell", label: "Concierge" },
    ],
    rooms: [
      {
        name: "Deluxe, King",
        imageUrl: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&h=350&fit=crop",
        pricePerNight: 794,
        pointsPerNight: 63531,
        bedType: "1 King Bed",
      },
      {
        name: "Corner, King",
        imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&h=350&fit=crop",
        pricePerNight: 919,
        pointsPerNight: 73545,
        bedType: "1 King Bed",
      },
    ],
    memberBenefits: [
      {
        icon: "points-2x",
        title: "2X points on hotels",
        description: "When you book with any linked card",
      },
      {
        icon: "points-redeem",
        title: "Pay with points",
        description: "Redeem points toward any applicable trip",
      },
    ],
  },
};

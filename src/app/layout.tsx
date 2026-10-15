import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bilt Rewards — Travel Portal",
  description: "Redeem points for hotels, flights, and more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

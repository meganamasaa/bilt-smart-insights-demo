import BiltNavbar from "@/components/layout/BiltNavbar";
import HeroSection from "@/components/landing/HeroSection";

export default function Home() {
  return (
    <>
      <BiltNavbar />
      <main className="max-w-7xl mx-auto">
        <HeroSection />
      </main>
    </>
  );
}

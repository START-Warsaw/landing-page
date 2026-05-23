import AnnouncementBanner from "@/components/AnnouncementBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import FactsSection from "@/components/FactsSection";
import CommunitySection from "@/components/CommunitySection";
import NetworkSection from "@/components/NetworkSection";
import UpcomingEventSection from "@/components/UpcomingEventSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-[68px]" />
      <AnnouncementBanner />
      <main>
        <HeroSection />
        <PartnersSection />
        <FactsSection />
        <CommunitySection />
        <NetworkSection />
        <UpcomingEventSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}

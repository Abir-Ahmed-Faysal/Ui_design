import { Hero } from "@/components/hero";
import { CoreServices } from "@/components/core-services";
import { AgencyBehindMarquee } from "@/components/agency-behind-marquee";
import { DrivingDemand } from "@/components/driving-demand";
import { ServicesSection } from "@/components/services-section";
import { StackedCards } from "@/components/stacked-cards";
import { FeaturedWork } from "@/components/featured-work";
import { WhatsNew } from "@/components/whats-new";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="flex-1 overflow-hidden relative z-10 bg-deep-black mb-[80vh] md:mb-[90vh] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Hero />
        <CoreServices />
        <AgencyBehindMarquee />
        <DrivingDemand />
        <ServicesSection />
        <StackedCards />
        <FeaturedWork />
        <WhatsNew />
      </main>
      <Footer />
    </>
  );
}

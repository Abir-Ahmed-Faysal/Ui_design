import { Hero } from "@/components/hero";
import { AgencyBehindMarquee } from "@/components/agency-behind-marquee";
import { FeaturedWork } from "@/components/featured-work";
import { HorizontalScroll } from "@/components/horizontal-scroll";
import { ServicesSection } from "@/components/services-section";
import { StackedCards } from "@/components/stacked-cards";
import { WhatsNew } from "@/components/whats-new";
import { Footer } from "@/components/footer";
import PageLoader from "@/components/page-loader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <main className="flex-1 overflow-hidden relative z-10 bg-black mb-[80vh] md:mb-[100vh]">
        <Hero />
        <AgencyBehindMarquee />
        <FeaturedWork />
        <HorizontalScroll />
        <ServicesSection />
        <StackedCards />
        <WhatsNew />
      </main>
      <Footer />
    </>
  );
}

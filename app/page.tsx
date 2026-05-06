import { Hero } from "@/components/hero";
import { StackedCards } from "@/components/stacked-cards";
import { HorizontalScroll } from "@/components/horizontal-scroll";
import { FeaturedWork } from "@/components/featured-work";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="flex-1 overflow-hidden relative z-10 bg-deep-black mb-[80vh] md:mb-[90vh] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Hero />
        <StackedCards />
        <HorizontalScroll />
        <FeaturedWork />
      </main>
      <Footer />
    </>
  );
}

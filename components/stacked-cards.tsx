"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BLOCKS = [
  {
    id: "pioneers",
    rotate: 0,
    bg: "bg-black",
    color: "text-white",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=800&h=800&q=90&auto=format&fit=crop",
    heading: "Pioneers",
    text: "We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search.",
  },
  {
    id: "award-winners",
    rotate: 2.5,
    bg: "bg-mint",
    color: "text-black",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5079.JPG?w=800&h=800&q=90&auto=format&fit=crop",
    heading: "Award Winners",
    text: "#1 Most Recommended Content Marketing Agency. Global Search Awards winners.",
  },
  {
    id: "built-for-speed",
    rotate: -3.5,
    bg: "bg-white",
    color: "text-black",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-21.36.35.png?w=800&h=800&q=90&auto=format&fit=crop",
    heading: "Built for Speed",
    text: "The internet moves fast. So do we. We build campaigns in real-time response to cultural moments.",
  },
];

export function StackedCards() {
  const containerRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    cards.forEach((card, i) => {
      if (i === 0) return; // First card stays pinned at the bottom layer

      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top center",
          end: "bottom center",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    });

    // Pinned Container Logic
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=2000",
      pin: true,
      scrub: 1,
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-grey-dark overflow-hidden flex items-center justify-center">
      <div className="container-fluid px-container h-full relative flex items-center justify-center">
        
        {/* Section Title */}
        <div className="absolute top-20 left-container z-10">
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
            Legacy In The Making
          </p>
        </div>

        {/* Cards Stack */}
        <div className="relative w-full max-w-4xl h-[600px]">
          {BLOCKS.map((block, i) => (
            <div
              key={block.id}
              ref={(el) => { cardsRef.current[i] = el!; }}
              className={`absolute inset-0 w-full h-full rounded-3xl p-12 flex flex-col md:flex-row items-center gap-12 shadow-2xl transition-transform duration-500 ${block.bg} ${block.color}`}
              style={{ 
                transform: `rotate(${block.rotate}deg)`,
                zIndex: i + 1,
                top: `${i * 20}px` 
              }}
            >
              <div className="w-full md:w-1/2 aspect-square relative rounded-2xl overflow-hidden">
                <Image 
                  src={block.image}
                  alt={block.heading}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col gap-6">
                <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
                  {block.heading}
                </h3>
                <p className="text-xl md:text-2xl font-medium leading-tight opacity-80">
                  {block.text}
                </p>
                <div className="mt-auto">
                   <span className="text-[10px] font-bold uppercase tracking-widest border-b border-current pb-2">
                      Learn More
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

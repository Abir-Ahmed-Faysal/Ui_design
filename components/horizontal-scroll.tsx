"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HorizontalScroll() {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      containerRef.current,
      { x: 0 },
      {
        x: "-300vw",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-black">
      <div ref={triggerRef}>
        <div ref={containerRef} className="flex h-screen w-[400vw] items-center relative">
          
          {/* Section 1: Intro Text */}
          <div className="flex h-full w-screen items-center justify-center px-container">
            <h2 className="text-pure-white text-[10vw] font-bold uppercase tracking-tighter leading-[0.8] max-w-4xl">
              Chasing <span className="text-mint">Consumers</span> Not Algorithms
            </h2>
          </div>

          {/* Section 2: Large Media Layered */}
          <div className="flex h-full w-[100vw] items-center justify-center relative">
            <div className="relative w-[60vw] aspect-video rounded-2xl overflow-hidden shadow-2xl z-10">
              <Image 
                src="https://rise-atseven.transforms.svdcdn.com/production/images/driving-demand.jpg?w=1600&q=90&auto=format&fit=crop"
                alt="Case Study"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlapping text */}
            <div className="absolute top-1/4 right-0 z-20 translate-x-1/2">
               <span className="text-mint text-[15vw] font-bold uppercase tracking-tighter leading-none opacity-50">
                  Search
               </span>
            </div>
          </div>

          {/* Section 3: More Media */}
          <div className="flex h-full w-[100vw] items-center justify-around px-container">
             <div className="w-[30vw] aspect-square relative rounded-2xl overflow-hidden -rotate-6 translate-y-20">
                <Image 
                  src="https://rise-atseven.transforms.svdcdn.com/production/images/RedBull-Instagram-Post-45.png?w=800&q=80&auto=format&fit=crop"
                  alt="Social"
                  fill
                  className="object-cover"
                />
             </div>
             <div className="w-[40vw] aspect-video relative rounded-2xl overflow-hidden rotate-3 -translate-y-20">
                <Image 
                  src="https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=1200&h=800&q=90&auto=format&fit=crop"
                  alt="Work"
                  fill
                  className="object-cover"
                />
             </div>
          </div>

          {/* Section 4: Final Message */}
          <div className="flex h-full w-screen items-center justify-center px-container">
            <h3 className="text-pure-white text-6xl md:text-8xl font-bold uppercase tracking-tighter text-center max-w-5xl">
              Building the future of search-first <br /> <span className="text-mint">content marketing</span>
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}

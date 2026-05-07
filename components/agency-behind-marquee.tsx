"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MARQUEE_LOGOS = [
  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/red-bull-logo-black.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/gogle.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/tiktok.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/youtube.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/amazon.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/reddit.png?w=400&q=100&auto=format&fit=crop",
];

export function AgencyBehindMarquee() {
  return (
    <section className="w-full py-20 bg-pure-white overflow-hidden relative z-20">
      <div className="container-fluid px-container">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
          
          <div className="shrink-0 z-20 relative">
            <h2 className="text-black text-lg md:text-xl font-bold tracking-tighter uppercase leading-none">
              The agency behind <br className="hidden lg:block" /> the success on...
            </h2>
          </div>
          
          {/* Marquee Container */}
          <div className="relative flex-1 w-full overflow-hidden flex items-center py-4">
            {/* Blur Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-pure-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-pure-white to-transparent z-10 pointer-events-none" />
            
            <motion.div 
              className="flex gap-20 md:gap-32 items-center whitespace-nowrap"
              animate={{ x: [0, -1200] }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
            >
              {[...MARQUEE_LOGOS, ...MARQUEE_LOGOS, ...MARQUEE_LOGOS].map((src, i) => (
                <div key={i} className="w-24 md:w-32 h-10 md:h-12 relative shrink-0 grayscale brightness-0 opacity-40 hover:opacity-100 transition-all duration-500">
                  <Image 
                    src={src} 
                    alt="Brand Logo" 
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 96px, 128px"
                  />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

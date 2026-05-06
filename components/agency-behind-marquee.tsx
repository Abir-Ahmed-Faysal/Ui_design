"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MARQUEE_LOGOS = [
  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/red-bull-logo-black.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/gogle.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/chat-gpt.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/gemini.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/tiktok.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/youtube.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/pinterest.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/giphy.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/reddit.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/amazon.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/SN.webp?w=400&q=80&auto=format&fit=crop",
];

export function AgencyBehindMarquee() {
  return (
    <section className="w-full pt-16 pb-16 bg-[#EBEBEB] overflow-hidden relative z-20">
      <div className="w-full px-4 md:px-8 max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
          
          <div className="shrink-0 z-20 relative">
            <h2 className="text-[#111111] text-sm md:text-base lg:text-lg font-medium tracking-tight whitespace-nowrap">
              The agency behind ...
            </h2>
          </div>
          
          {/* Marquee Container */}
          <div className="relative flex-1 w-full overflow-hidden flex items-center">
            {/* Blur Edges for light background */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#EBEBEB] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#EBEBEB] to-transparent z-10 pointer-events-none" />
            
            <motion.div 
              className="flex gap-16 md:gap-24 items-center whitespace-nowrap pl-16"
              animate={{ x: [0, -2400] }}
              transition={{
                repeat: Infinity,
                duration: 45,
                ease: "linear",
              }}
            >
              {[...MARQUEE_LOGOS, ...MARQUEE_LOGOS, ...MARQUEE_LOGOS].map((src, i) => (
                <div key={i} className="w-20 md:w-28 lg:w-32 h-8 md:h-12 relative shrink-0">
                  <Image 
                    src={src} 
                    alt="Platform Logo" 
                    fill
                    className="object-contain brightness-0 opacity-40 hover:opacity-100 transition-opacity duration-300"
                    sizes="(max-width: 768px) 80px, 128px"
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

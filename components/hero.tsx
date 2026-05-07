"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TextSplitter } from "./ui/text-splitter";

const PLATFORMS = [
  { name: "Google", src: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/gogle.png?w=400&q=100&auto=format&fit=crop" },
  { name: "TikTok", src: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/tiktok.png?w=400&q=100&auto=format&fit=crop" },
  { name: "YouTube", src: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/youtube.png?w=400&q=100&auto=format&fit=crop" },
  { name: "Amazon", src: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/amazon.png?w=400&q=100&auto=format&fit=crop" },
  { name: "Reddit", src: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/reddit.png?w=400&q=100&auto=format&fit=crop" },
];

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col pt-40 pb-20 px-container overflow-hidden bg-black">
      {/* Atmospheric Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-mint/20 to-transparent blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto">
        {/* Top Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-[1px] bg-mint" />
          <span className="text-mint font-bold uppercase tracking-widest text-[10px]">
            Award Winning Search-First Agency
          </span>
        </motion.div>

        {/* Main Editorial Headline */}
        <h1 className="text-pure-white text-[clamp(3.5rem,11vw,14rem)] font-bold leading-[0.85] tracking-[-0.04em] uppercase flex flex-col">
          <div className="flex flex-wrap items-center gap-x-2">
            <TextSplitter text="We" delay={0.2} />
            <TextSplitter text="Create" delay={0.3} />
          </div>
          
          <div className="flex flex-wrap items-center gap-x-2 -mt-[0.05em]">
            <TextSplitter text="Category" delay={0.5} />
            
            {/* Inline Media Element - REDBULL CARD */}
            <motion.div 
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: -5 }}
              transition={{ delay: 1, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as const }}
              className="relative inline-block w-[1.2em] h-[0.75em] rounded-[15%] overflow-hidden bg-grey-dark mx-[0.1em] border border-white/10 shadow-2xl"
            >
              <Image 
                src="https://rise-atseven.transforms.svdcdn.com/production/images/RedBull-Instagram-Post-45.png?w=800&q=80&auto=format&fit=crop"
                alt="Editorial Highlight"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
            
            <TextSplitter text="Leaders" delay={0.7} />
          </div>
        </h1>

        {/* Sub-headline / Description */}
        <div className="mt-12 md:mt-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-pure-white/60 text-xl md:text-3xl max-w-2xl font-medium leading-tight"
          >
            We help brands win on every searchable platform by chasing consumers, not algorithms.
          </motion.p>

          {/* Platform Logos Strip */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex items-center gap-8 md:gap-12 grayscale opacity-40 hover:opacity-100 transition-all duration-500"
          >
            {PLATFORMS.map((platform) => (
              <div key={platform.name} className="relative w-20 h-8 md:w-24 md:h-10">
                <Image 
                  src={platform.src}
                  alt={platform.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-auto pt-20"
      >
        <div className="flex items-center gap-4 text-white/30 text-[10px] uppercase font-bold tracking-widest">
          <span>Scroll to explore</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-4 h-4 flex items-center justify-center"
          >
            ↓
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

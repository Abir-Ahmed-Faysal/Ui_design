"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TextSplitter } from "./ui/text-splitter";

const PLATFORM_LOGOS = [
  { name: "Google", src: "/orginal logo/gogle.webp" },
  { name: "ChatGPT", src: "/orginal logo/chat-gpt.webp" },
  { name: "Gemini", src: "/orginal logo/gemini.webp" },
  { name: "TikTok", src: "/orginal logo/tiktok.webp" },
  { name: "YouTube", src: "/orginal logo/youtube.webp" },
  { name: "Pinterest", src: "/orginal logo/pinterest.webp" },
  { name: "Giphy", src: "/orginal logo/giphy.webp" },
  { name: "Reddit", src: "/orginal logo/reddit.webp" },
  { name: "Amazon", src: "/orginal logo/amazon.webp" },
];

const RANDOM_IMAGES = [
  "/images/hero/hero-bg.png", // Astronaut
  "/images/hero/hero-bg.webp", // Pooky
];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [heroImage, setHeroImage] = useState(RANDOM_IMAGES[0]);

  useEffect(() => {
    setMounted(true);
    // Randomize image on load
    const randomIndex = Math.floor(Math.random() * RANDOM_IMAGES.length);
    setHeroImage(RANDOM_IMAGES[randomIndex]);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-container overflow-hidden bg-black">
      {/* Full-screen Background Image */}
      <motion.div 
        key={heroImage}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={heroImage}
          alt="Hero Background"
          fill
          className="object-cover blur-sm lg:blur-md"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </motion.div>

      {/* Awards Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute top-36 md:top-40 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-y-2"
      >
        <div className="uppercase text-[9px] md:text-[10px] font-bold tracking-[0.2em] max-w-52 text-balance text-center text-white/30">
          #1 Most recommended content marketing agency
        </div>
        
        <div className="flex items-center gap-x-6 grayscale opacity-50">
          <div className="w-56 md:w-72 h-6 md:h-8 relative">
            <Image
              src="/images/hero/awards.webp"
              alt="Awards Recognition"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 w-full flex flex-col items-center text-center pt-10 md:pt-16">
        {/* Main Headline */}
        <h1 className="text-white text-5xl md:text-7xl lg:text-[7.5rem] font-bold leading-[0.8] tracking-[-0.04em] uppercase flex flex-col items-center">
          <div className="flex items-center justify-center gap-x-[0.25em]">
            <TextSplitter text="We" delay={0.2} />
            <TextSplitter text="Create" delay={0.3} />
          </div>
          <div className="flex items-center justify-center gap-x-[0.25em] -mt-1 md:-mt-2">
            <TextSplitter text="Category" delay={0.5} />
            
            {/* Inline Media Card - Tighter fit */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: -5 }}
              transition={{
                delay: 0.7,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="relative w-[0.85em] aspect-square bg-grey-800 rounded-[20%] overflow-hidden shadow-2xl border border-white/10"
            >
              <Image
                src={heroImage}
                alt="Featured Work"
                fill
                className="object-cover"
              />
            </motion.div>

            <TextSplitter text="Leaders" delay={0.8} />
          </div>
        </h1>

        {/* Sub-headline - Tighter margin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-4 md:mt-6 text-white/60 text-sm md:text-base lg:text-lg font-medium max-w-2xl text-center tracking-tight"
        >
          on every searchable platform
        </motion.div>

        {/* Platform Logos - Balanced spacing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-x-10 gap-y-6"
        >
          {PLATFORM_LOGOS.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.05 }}
              className="relative w-12 h-5 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Labels */}
      <div className="absolute bottom-10 left-container right-container z-10 flex justify-between items-end text-[9px] md:text-[10px] font-bold uppercase tracking-tight text-white/30">
        <div className="max-w-[280px] leading-relaxed">
          Organic media planners creating, distributing & optimising <br/>
          <span className="text-white/50">search-first</span> content for SEO, Social, PR, Ai and LLM search
        </div>
        <div className="text-right leading-relaxed">
          4 Global Offices serving <br/>
          UK, USA (New York) & EU
        </div>
      </div>
    </section>
  );
}

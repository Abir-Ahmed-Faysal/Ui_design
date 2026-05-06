"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const CARDS = [
  {
    title: "SEO",
    description: "Search First Creative. We build strategies that put you at the top of Google and keep you there.",
    color: "bg-[#1E1E1E]",
  },
  {
    title: "Digital PR",
    description: "We create campaigns that people want to talk about, driving high-quality links and brand awareness.",
    color: "bg-[#2A2A2A]",
  },
  {
    title: "Social",
    description: "Social-first content that resonates with your audience and drives real engagement across platforms.",
    color: "bg-[#333333]",
  },
  {
    title: "Content",
    description: "Data-driven content that answers exactly what your customers are searching for.",
    color: "bg-[#404040]",
  },
];

interface CardProps {
  card: typeof CARDS[0];
  index: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

function Card({ card, index, progress, range, targetScale }: CardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scale down the card as we scroll past it
  const scale = useTransform(progress, range, [1, targetScale]);
  // Darken the card as it gets overlapped
  const opacity = useTransform(progress, range, [1, 0.4]);

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, opacity, top: `calc(-5vh + ${index * 25}px)` }} 
        className={`relative w-full max-w-5xl h-[60vh] md:h-[70vh] rounded-[2rem] p-10 md:p-20 flex flex-col justify-between origin-top ${card.color} shadow-2xl`}
      >
        <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-pure-white">
          {card.title}
        </h2>
        <p className="text-2xl md:text-4xl text-pure-white/80 max-w-2xl leading-tight">
          {card.description}
        </p>
      </motion.div>
    </div>
  );
}

export function StackedCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative w-full bg-deep-black pb-[10vh]">
      <div className="container mx-auto px-6 pt-32 pb-16 sticky top-0 z-10">
        <h2 className="text-pure-white text-5xl md:text-7xl font-bold uppercase tracking-tighter">Our Services</h2>
      </div>
      <div className="mt-[-10vh]">
        {CARDS.map((card, i) => {
          // Calculate when this specific card should start shrinking
          const targetScale = 1 - ((CARDS.length - i) * 0.05);
          // Distribute the shrink effect across the scroll progress
          const range = [i * 0.25, 1];
          
          return (
            <Card 
              key={i} 
              index={i} 
              card={card} 
              progress={scrollYProgress} 
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}

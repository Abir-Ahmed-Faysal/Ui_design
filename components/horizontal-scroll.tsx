"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PROJECTS = [
  { id: 1, title: "Next Level Commerce", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, title: "Global Footprint", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
  { id: 3, title: "Brand Evolution", img: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, title: "Creative Scale", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop" },
];

export function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true); // Default true for SSR safety, updated in effect

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Run once on mount to get correct state
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  // We use a tall container to allow plenty of scroll room
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map the vertical scroll progress (0 to 1) into a horizontal translation (-70%)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={targetRef} className={`relative bg-deep-black ${isMobile ? "h-auto py-24" : "h-[300vh]"}`}>
      <div className={isMobile ? "relative h-auto flex flex-col" : "sticky top-0 h-screen flex flex-col justify-center overflow-hidden"}>
        <div className="container mx-auto px-6 mb-12">
          <h2 className="text-pure-white text-5xl md:text-7xl font-bold uppercase tracking-tighter">Featured Work</h2>
        </div>
        
        <motion.div 
          style={{ x: isMobile ? "0%" : x }} 
          className={`flex ${isMobile ? "flex-col gap-12 px-6" : "gap-10 px-[10vw]"}`}
        >
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className={`relative overflow-hidden group shrink-0 rounded-2xl cursor-pointer ${
                isMobile ? "w-full aspect-square flex flex-col justify-end p-8" : "w-[60vw] h-[60vh] flex flex-col justify-end p-10"
              }`}
            >
              <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-500 group-hover:bg-black/10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={project.img} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-700 ease-out group-hover:scale-100" 
              />
              <h3 className="relative z-20 text-4xl md:text-6xl font-bold text-pure-white uppercase tracking-tighter">
                {project.title}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

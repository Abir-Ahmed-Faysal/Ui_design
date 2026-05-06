"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const PROJECTS = [
  { id: 1, title: "Next Level Commerce", client: "Brand X", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, title: "Global Footprint", client: "Agency Y", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
  { id: 3, title: "Brand Evolution", client: "Studio Z", img: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, title: "Creative Scale", client: "Tech Corp", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop" },
  { id: 5, title: "Visual Identity", client: "Start Up", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" },
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect: moves the image slightly slower than the container scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // CSS Grid logic: Every 3rd item spans full width on medium screens
  const isFullWidth = index % 3 === 0;

  return (
    <div 
      ref={ref} 
      className={`relative group overflow-hidden cursor-none rounded-2xl ${
        isFullWidth ? "col-span-1 md:col-span-2 aspect-[16/9] md:aspect-[21/9]" : "col-span-1 aspect-[4/5]"
      }`}
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={project.img} 
          alt={project.title} 
          className="object-cover w-full h-full scale-100 transition-transform duration-[1.5s] ease-out group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-deep-black/30 group-hover:bg-deep-black/10 transition-colors duration-700" />
      </motion.div>
      <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10 w-full bg-gradient-to-t from-deep-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
        <h3 className="text-pure-white text-3xl md:text-5xl font-bold uppercase tracking-tighter">
          {project.title}
        </h3>
        <p className="text-pure-white/80 text-xl mt-2">{project.client}</p>
      </div>
    </div>
  );
}

export function FeaturedWork() {
  const [isHovering, setIsHovering] = useState(false);

  // Smooth springs for the custom cursor (fixed position)
  const cursorX = useSpring(-100, { stiffness: 250, damping: 20, mass: 0.5 });
  const cursorY = useSpring(-100, { stiffness: 250, damping: 20, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      cursorX.set(e.clientX - 60); // 60 is half of 120px width
      cursorY.set(e.clientY - 60);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <section 
      className="relative w-full bg-deep-black py-24 md:py-48 px-4 md:px-8 lg:px-16"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="container mx-auto">
        <h2 className="text-pure-white text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-16">
          More Featured Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 cursor-none">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Custom Cursor Tag */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        animate={{ 
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.5
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.2 } }}
        className="pointer-events-none fixed top-0 left-0 w-[120px] h-[120px] bg-pure-white rounded-full flex items-center justify-center z-[100] shadow-2xl"
      >
        <span className="text-deep-black font-bold text-sm uppercase tracking-wider text-center leading-tight">
          View<br/>Project
        </span>
      </motion.div>
    </section>
  );
}

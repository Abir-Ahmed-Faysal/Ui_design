"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: 1,
    name: "SIXT",
    year: "2023-2025",
    category: "Car rental",
    outcome: "An extra 3m clicks regionally through SEO",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=1200&h=800&q=90&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Dojo",
    year: "2021-2025",
    category: "Card Machines",
    outcome: "A B2B success story for Dojo card machines",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=1200&h=800&q=90&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Magnet Trade",
    year: "2023-2024",
    category: "Trade Supplies",
    outcome: "A full service SEO success story 170%+ increase",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=1200&h=800&q=90&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "JD Sports",
    year: "2025",
    category: "Trainers",
    outcome: "65% up YoY in clicks for JD Sports",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=1200&h=800&q=90&auto=format&fit=crop",
  },
];

export function FeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const leftRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".project-card");
    
    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section as Element,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveIndex(i),
        onEnterBack: () => setActiveIndex(i),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-black py-20 lg:py-40">
      <div className="container-fluid px-container">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* LEFT SIDE - Sticky Names */}
          <div className="hidden lg:block lg:w-1/2 lg:sticky lg:top-40 lg:h-fit">
            <h2 className="text-mint font-bold uppercase tracking-widest text-[10px] mb-12">
              Featured Work
            </h2>
            
            <div className="flex flex-col gap-8" ref={leftRef}>
              {PROJECTS.map((project, i) => (
                <div 
                  key={project.id}
                  className={`transition-all duration-700 cursor-pointer ${
                    activeIndex === i ? "opacity-100 translate-x-4" : "opacity-20"
                  }`}
                  onClick={() => {
                    const target = document.querySelector(`#project-${project.id}`);
                    target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-pure-white text-[10px] font-bold mt-4">
                      0{i + 1}
                    </span>
                    <h3 className="text-pure-white text-7xl xl:text-8xl font-bold uppercase tracking-tighter leading-none">
                      {project.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Scrolling Cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-32 lg:gap-60">
            {PROJECTS.map((project, i) => (
              <div 
                key={project.id} 
                id={`project-${project.id}`}
                className="project-card relative w-full aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden group shadow-2xl"
              >
                <Image 
                  src={project.img}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-custom group-hover:scale-105"
                />
                
                {/* Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                  <div className="flex flex-col gap-4">
                    <span className="text-mint font-bold uppercase tracking-widest text-[10px]">
                      {project.category}
                    </span>
                    <h4 className="text-pure-white text-4xl font-bold leading-tight uppercase tracking-tighter">
                      {project.outcome}
                    </h4>
                    <div className="h-[1px] w-full bg-white/20 my-4" />
                    <div className="flex justify-between items-center text-white/40 text-[10px] font-bold uppercase tracking-widest">
                      <span>{project.year}</span>
                      <span>View Case Study ↗</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore All CTA */}
        <div className="mt-20 flex justify-center">
          <Link 
            href="/work"
            className="group flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-mint transition-colors duration-500"
          >
            Explore all our work
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

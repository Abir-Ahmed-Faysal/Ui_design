"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
  {
    id: 8366,
    name: "SIXT",
    year: "[2023-2025]",
    category: "Car rental",
    outcome: "An extra 3m clicks regionally through SEO",
    colour: "#cb7b3a",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=800&h=600&q=90&auto=format&fit=crop",
  },
  {
    id: 7670,
    name: "Dojo — B2B",
    year: "[2021-2025]",
    category: "Card Machines",
    outcome: "A B2B success story for Dojo card machines",
    colour: "#fdd8c4",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=800&h=600&q=90&auto=format&fit=crop",
  },
  {
    id: 19708,
    name: "Magnet Trade — B2B",
    year: "[2023-2024]",
    category: "Trade Supplies",
    outcome: "A full service SEO success story 170%+ increase",
    colour: "#d8c4fd",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=800&h=600&q=90&auto=format&fit=crop",
  },
  {
    id: 16982,
    name: "Leading eSIM brand globally",
    year: "[2023-2025]",
    category: "Esims",
    outcome: "Increasing brand and non-brand visibility UK/ES",
    colour: "#cb7b3a",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=800&h=600&q=90&auto=format&fit=crop",
  },
  {
    id: 17067,
    name: "JD Sports",
    year: "[2025]",
    category: "Trainers",
    outcome: "65% up YoY in clicks for JD Sports FR, IT, ES",
    colour: "#3a8ccb",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=800&h=600&q=90&auto=format&fit=crop",
  },
  {
    id: 8221,
    name: "Parkdean Resorts",
    year: "[2019-2025]",
    category: "Easter Breaks",
    outcome: "Dominating Google and AI search",
    colour: "#d2b59d",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=800&h=600&q=90&auto=format&fit=crop",
  },
  {
    id: 301,
    name: "Pooky",
    year: "[2025]",
    category: "Rechargeable Lights",
    outcome: "Driving demand for Pooky Rechargeable Lights",
    colour: "#39b0bd",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=800&h=600&q=90&auto=format&fit=crop",
  },
  {
    id: 27,
    name: "Revolution Beauty",
    year: "[2022-2025]",
    category: "Beauty Dupes",
    outcome: "Building the UK's leading beauty dupe brand",
    colour: "#fecacc",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-10-at-12.13.46.png?w=800&h=600&q=90&auto=format&fit=crop",
  },
  {
    id: 297,
    name: "Lloyds Pharmacy",
    year: "[2022-23]",
    category: "STI tests",
    outcome: "Driving category leadership for STI tests",
    colour: "#60dcfb",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-04-at-12.50.54.png?w=800&h=600&q=90&auto=format&fit=crop",
  },
  {
    id: 8004,
    name: "PrettyLittleThing",
    year: "[2021-2023]",
    category: "Outfits",
    outcome: "Driving discovery for everything ‘outfits’ for PLT",
    colour: "#fecacc",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-14.43.56.png?w=800&h=600&q=90&auto=format&fit=crop",
  },
];

// Category pill badge
function CategoryPill({
  category,
  textColour = "text-white",
  bgClass = "bg-white/20",
}: {
  category: string;
  textColour?: string;
  bgClass?: string;
}) {
  return (
    <div
      className={`shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none ${textColour} ${bgClass} backdrop-blur-sm text-sm gap-x-2 py-2 px-3`}
    >
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" strokeWidth="2" />
        <path strokeLinecap="round" strokeWidth="2" d="M21 21l-4.35-4.35" />
      </svg>
      <span>{category}</span>
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" strokeWidth="2" />
        <polyline points="16 7 22 7 22 13" strokeWidth="2" />
      </svg>
    </div>
  );
}

// Individual work card
function WorkCard({
  project,
  isActive,
  onEnter,
  onLeave,
}: {
  project: (typeof PROJECTS)[0];
  isActive: boolean;
  onEnter: (id: number) => void;
  onLeave: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      cardRef.current.style.setProperty("--mx", `${x}%`);
      cardRef.current.style.setProperty("--my", `${y}%`);
    },
    []
  );

  return (
    <div
      ref={cardRef}
      className="group relative grid rounded-2xl overflow-hidden mb-5 lg:mb-7 cursor-none"
      style={
        {
          "--mx": "50%",
          "--my": "50%",
        } as React.CSSProperties
      }
      onMouseEnter={() => onEnter(project.id)}
      onMouseLeave={onLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Layer 1: Background image */}
      <div className="col-start-1 row-start-1 transition-transform duration-700 group-hover:scale-105 will-change-transform">
        <div className="relative overflow-hidden w-full" style={{ paddingTop: "75%" }}>
          <Image
            src={project.img}
            alt={project.name}
            fill
            className="object-cover object-center transition-opacity"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Layer 2: Category pill — default (top-right on desktop, shown when not hovered) */}
      <div className="col-start-1 row-start-1 absolute inset-0 p-3 lg:p-5 z-30 flex justify-end items-start lg:items-end">
        <div
          className={`transition-opacity duration-300 ${
            isActive ? "opacity-0" : "opacity-100"
          }`}
        >
          <CategoryPill category={project.category} bgClass="bg-white/20" textColour="text-white" />
        </div>
      </div>

      {/* Layer 3: Mobile name + year (bottom-left, hidden on lg) */}
      <div className="col-start-1 row-start-1 absolute inset-0 p-3 z-30 flex lg:hidden justify-start items-end">
        <div className="grid gap-y-1 relative z-20">
          <p className="text-white text-xs font-medium">{project.year}</p>
          <p className="text-white text-3xl font-bold tracking-tight leading-none">
            {project.name}
          </p>
        </div>
        <div className="absolute w-full bottom-0 left-0 h-32 bg-gradient-to-t from-black z-10 opacity-70" />
      </div>

      {/* Layer 4: Circle-mask colour reveal overlay */}
      <div
        className="col-start-1 row-start-1 absolute inset-0 z-40 flex flex-col items-start justify-between p-3 lg:p-5"
        style={{
          backgroundColor: project.colour,
          color: "#111212",
          clipPath: isActive
            ? "circle(150% at var(--mx) var(--my))"
            : "circle(0% at var(--mx) var(--my))",
          transition: "clip-path 0.6s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >
        <p className="text-current text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight max-w-lg">
          {project.outcome}
        </p>
        <div className="w-full flex items-end justify-end">
          <CategoryPill
            category={project.category}
            textColour="text-current"
            bgClass="bg-white/15"
          />
        </div>
      </div>
    </div>
  );
}

export function FeaturedWork() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="w-full bg-[#111111] py-0 z-20 relative">
      <div className="w-full px-4 md:px-7">
        <div className="w-full relative flex overflow-hidden lg:overflow-visible">
          <div className="w-full py-7 lg:sticky lg:top-0 lg:h-screen">
            <div className="w-full h-full overflow-hidden bg-[#111111] lg:bg-[#1a1a1a] rounded-3xl grid grid-cols-12 px-5 lg:pl-8 lg:pr-8 xl:pl-10 xl:pr-10">

              {/* ── LEFT COLUMN: sticky project list (desktop only) ── */}
              <div className="relative col-span-12 items-start hidden lg:flex lg:flex-col lg:col-span-6 lg:h-[96svh]">
                <div className="flex flex-col items-start relative z-10 h-full pt-16 lg:pt-24 lg:pb-32 lg:gap-y-8 w-full">
                  <h2 className="text-white text-base lg:text-lg xl:text-xl font-medium tracking-tight">
                    Featured Work
                  </h2>

                  <div className="relative flex-1 overflow-hidden pr-5 w-full">
                    {/* Fade top */}
                    <div className="absolute top-0 left-0 w-full h-1/4 z-20 pointer-events-none bg-gradient-to-b from-[#1a1a1a] to-transparent" />
                    {/* Fade bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-1/4 z-20 pointer-events-none bg-gradient-to-t from-[#1a1a1a] to-transparent" />

                    <div ref={listRef} className="flex flex-col gap-y-1 2xl:gap-y-2 relative z-10">
                      {PROJECTS.map((project) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 30 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                        >
                          <a
                            href={`/work/${project.name.toLowerCase().replace(/\s+/g, "-")}`}
                            className={`flex items-start gap-x-2 transition-all duration-300 group/link ${
                              activeId === project.id ? "translate-x-3" : ""
                            }`}
                            onMouseEnter={() => setActiveId(project.id)}
                            onMouseLeave={() => setActiveId(null)}
                          >
                            <span
                              className={`text-white text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-none transition-colors duration-300 ${
                                activeId !== null && activeId !== project.id
                                  ? "opacity-30"
                                  : "opacity-100"
                              }`}
                            >
                              {project.name}
                            </span>
                            <span className="text-white text-xs font-medium mt-2 shrink-0">
                              {project.year}
                            </span>
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── RIGHT COLUMN: cards ── */}
              <div className="col-span-12 grid pt-7 pb-14 lg:col-span-6 lg:col-start-7 3xl:col-span-5 3xl:col-start-8">
                {/* Mobile header */}
                <div className="mb-5 lg:hidden">
                  <h2 className="text-white text-base font-medium tracking-tight">
                    Featured Work
                  </h2>
                </div>

                {PROJECTS.map((project) => (
                  <WorkCard
                    key={project.id}
                    project={project}
                    isActive={activeId === project.id}
                    onEnter={setActiveId}
                    onLeave={() => setActiveId(null)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-3 lg:mt-7">
          <Link
            href="/work"
            className="group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight capitalize font-medium overflow-hidden cursor-pointer focus:outline-none w-full md:w-auto text-base px-6 py-3 rounded-3xl hover:rounded-xl transition-all duration-300 bg-white text-[#111111]"
          >
            <div className="relative overflow-hidden">
              <div className="transition-transform duration-300 group-hover:-translate-y-6 flex items-center gap-x-2">
                <span>Explore Our Work</span>
                <span className="inline-block align-middle text-xs mt-0.5">↗</span>
              </div>
              <div className="absolute top-0 left-0 translate-y-6 transition-transform duration-300 group-hover:translate-y-0 flex items-center gap-x-2">
                <span>Explore Our Work</span>
                <span className="inline-block align-middle text-xs mt-0.5">↗</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

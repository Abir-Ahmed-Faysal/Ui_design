"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  { name: "Digital PR", href: "/services/digital-pr", img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png?w=800&q=90&auto=format&fit=crop" },
  { name: "Organic Social", href: "/services/social", img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-20.31.18.png?w=800&q=90&auto=format&fit=crop" },
  { name: "Search Strategy", href: "/services/strategy-growth", img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.37.50.png?w=800&q=90&auto=format&fit=crop" },
  { name: "Content Experience", href: "/services/content-experience", img: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7499.jpg?w=800&q=90&auto=format&fit=crop" },
  { name: "Data & Insights", href: "/services/data-insights", img: "https://rise-atseven.transforms.svdcdn.com/production/images/e34acc13-be9a-4862-a3bd-95aa2738aeb3.JPG?w=800&q=90&auto=format&fit=crop" },
  { name: "Onsite SEO", href: "/services/onsite-seo", img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-24-at-00.20.47.png?w=800&q=90&auto=format&fit=crop" },
];

export function ServicesSection() {
  return (
    <section className="w-full py-20 lg:py-40 bg-grey-light">
      <div className="container-fluid px-container">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <h2 className="text-black text-[clamp(3rem,8vw,8rem)] font-bold uppercase tracking-tighter leading-[0.85] flex flex-col">
            <span>The Agency</span>
            <div className="flex items-center gap-4">
              <span>Built To</span>
              <motion.div 
                className="relative w-[1.2em] h-[0.75em] rounded-[15%] overflow-hidden bg-black/10 shadow-lg -rotate-3"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Image 
                  src="https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5079.JPG?w=400&q=90&auto=format&fit=crop"
                  alt="Editorial"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <span>Lead Search</span>
          </h2>
          
          <div className="max-w-md">
            <p className="text-black/60 text-lg md:text-xl font-medium leading-tight mb-8">
              We specialize in creating category leaders through search-first content marketing and creative SEO.
            </p>
            <Link href="/services" className="text-black font-bold uppercase tracking-widest text-[10px] border-b border-black pb-2 hover:text-mint transition-colors">
              Explore all services ↗
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
          {SERVICES.map((service, i) => (
            <Link 
              key={service.name}
              href={service.href}
              className="group relative bg-grey-light aspect-square flex flex-col justify-between p-10 overflow-hidden hover:bg-black transition-colors duration-500"
            >
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-black/30 group-hover:text-white/30 font-bold">0{i + 1}</span>
                <span className="text-black group-hover:text-mint transition-colors duration-500">↗</span>
              </div>
              
              <h3 className="relative z-10 text-black group-hover:text-white text-3xl md:text-4xl font-bold uppercase tracking-tighter leading-none transition-colors duration-500">
                {service.name}
              </h3>

              {/* Hover Image Reveal */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                 <Image 
                   src={service.img}
                   alt={service.name}
                   fill
                   className="object-cover grayscale"
                 />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

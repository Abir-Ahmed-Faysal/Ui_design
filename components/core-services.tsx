"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const SERVICES = [
  { label: "Search Strategy", href: "/services/search-strategy" },
  { label: "SEO", href: "/services/seo" },
  { label: "Content Experience", href: "/services/content-experience" },
  { label: "B2B Marketing", href: "/services/b2b-marketing" },
  { label: "Digital PR", href: "/services/digital-pr" },
  { label: "Social Media & Campaigns", href: "/services/social-media" },
  { label: "Data & Insights", href: "/services/data-insights" },
  { label: "Social SEO/Search", href: "/services/social-seo" }
];

export function CoreServices() {
  return (
    <section className="relative w-full bg-[#111111] py-8 md:py-12 px-4 md:px-8 border-t border-pure-white/10 z-20">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 md:gap-8">
        <div className="shrink-0">
          <h2 className="text-pure-white text-lg md:text-xl font-medium tracking-tight uppercase">
            Core Services
          </h2>
        </div>
        
        <div className="flex flex-wrap gap-3 md:gap-4 justify-start xl:justify-end">
          {SERVICES.map((service, index) => (
            <Link 
              key={service.label} 
              href={service.href}
              className="group relative px-5 py-2.5 rounded-full border border-pure-white/20 bg-pure-white/5 hover:bg-[#6afbdf] hover:border-[#6afbdf] transition-colors duration-300 overflow-hidden"
            >
              <span className="relative z-10 text-pure-white group-hover:text-deep-black text-sm md:text-base font-medium tracking-tight whitespace-nowrap transition-colors duration-300">
                {service.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

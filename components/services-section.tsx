"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    name: "Digital PR",
    href: "/services/digital-pr",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png?w=800&q=90&auto=format&fit=crop",
  },
  {
    name: "Organic Social & Content",
    href: "/services/social",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-20.31.18.png?w=800&q=90&auto=format&fit=crop",
  },
  {
    name: "Search & Growth Strategy",
    href: "/services/strategy-growth",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.37.50.png?w=800&q=90&auto=format&fit=crop",
  },
  {
    name: "Content Experience",
    href: "/services/content-experience",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7499.jpg?w=800&q=90&auto=format&fit=crop",
  },
  {
    name: "Data & Insights",
    href: "/services/data-insights",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/e34acc13-be9a-4862-a3bd-95aa2738aeb3.JPG?w=800&q=90&auto=format&fit=crop",
  },
  {
    name: "Onsite SEO",
    href: "/services/onsite-seo",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-24-at-00.20.47.png?w=800&q=90&auto=format&fit=crop",
  },
];

function SlideButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight capitalize font-medium overflow-hidden cursor-pointer focus:outline-none w-full md:w-auto text-base px-6 py-3 rounded-3xl hover:rounded-xl transition-all duration-300 bg-white text-[#111111]"
    >
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-300 group-hover:-translate-y-6 flex items-center gap-x-2">
          <span>{children}</span>
          <span className="inline-block align-middle text-xs mt-0.5">↗</span>
        </div>
        <div className="absolute top-0 left-0 translate-y-6 transition-transform duration-300 group-hover:translate-y-0 flex items-center gap-x-2">
          <span>{children}</span>
          <span className="inline-block align-middle text-xs mt-0.5">↗</span>
        </div>
      </div>
    </Link>
  );
}

function ServiceRow({ service }: { service: (typeof SERVICES)[0] }) {
  return (
    <div className="col-span-12 md:col-span-6 -my-px">
      <div className="group relative">
        {/* Bottom border line */}
        <div className="absolute w-full bottom-0 left-0 z-0 md:px-12">
          <div className="w-full h-px bg-[#111111]/15" />
        </div>

        <Link href={service.href} className="grid grid-cols-1 relative z-10">
          {/* ── Layer 1: Service name row ── */}
          <div className="col-start-1 row-start-1 relative z-20 py-4 lg:py-6 flex items-center gap-3 text-[#111111] transition duration-500 group-hover:text-white">
            {/* Mobile thumbnail — hidden on pointer-fine (desktop) */}
            <div className="inline-flex relative w-12 h-12 rounded-lg overflow-hidden md:rounded-xl md:w-16 md:h-16 pointer-fine:hidden shrink-0">
              <Image
                src={service.img}
                alt={service.name}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>

            {/* Text with arrow slide animation */}
            <div className="pointer-fine:translate-x-10">
              <div className="relative">
                {/* Arrow: slides in from bottom-left on hover */}
                <div className="absolute pr-2 top-0 left-0 overflow-hidden">
                  <div className="transition-all duration-500 -translate-x-full translate-y-full -rotate-45 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0">
                    <span className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-none">
                      ↗
                    </span>
                  </div>
                </div>

                {/* Service name: slides right on hover */}
                <div className="transition-transform duration-500 group-hover:translate-x-14">
                  <span className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-none">
                    {service.name}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Layer 2: Background image reveal ── */}
          <div className="col-start-1 row-start-1 relative rounded-full overflow-hidden z-10 transition-opacity duration-500 bg-black opacity-0 group-hover:opacity-100">
            <div className="w-full h-full opacity-60 transition-transform duration-700 group-hover:scale-[1.05]">
              <div className="relative overflow-hidden w-full h-full" style={{ minHeight: "80px" }}>
                <Image
                  src={service.img}
                  alt={service.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="w-full pb-12 xl:pb-24 bg-[#EBEBEB] z-20 relative">
      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-12 overflow-hidden lg:pt-5 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">

          {/* ── Section header ── */}
          <div className="col-span-12">
            <div className="grid grid-cols-12 md:border-b md:border-[#111111]/15 md:pb-5 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">

              {/* Heading with inline image */}
              <div className="col-span-11 md:col-span-9 flex items-end">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  className="inline-flex flex-wrap items-end text-balance text-[#111111] text-6xl md:text-7xl lg:text-7xl 2xl:text-8xl font-bold tracking-tight leading-[0.9]"
                >
                  <span className="mr-2">Our</span>
                  {/* Inline springing image */}
                  <motion.span
                    className="inline-flex shrink-0 relative overflow-hidden bg-black/10 mr-2 align-middle"
                    style={{ borderRadius: "15%", width: "75px", height: "0.85em" }}
                    initial={{ scale: 0, rotate: -8 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.3, type: "spring", stiffness: 220, damping: 22 }}
                  >
                    <Image
                      src="https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5079.JPG?w=200&h=200&q=90&auto=format&fit=crop"
                      alt="Our Services"
                      fill
                      className="object-cover object-center"
                      sizes="75px"
                    />
                  </motion.span>
                  <span>Services</span>
                </motion.h2>
              </div>

              {/* Desktop CTA */}
              <div className="col-span-12 md:col-span-3 md:items-center md:justify-end hidden md:flex">
                <SlideButton href="/services">View All Services</SlideButton>
              </div>
            </div>
          </div>

          {/* ── Services grid ── */}
          <div className="col-span-12 grid grid-cols-12 gap-x-2">
            {SERVICES.map((service) => (
              <ServiceRow key={service.href} service={service} />
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="col-span-12 md:hidden">
            <SlideButton href="/services">View All Services</SlideButton>
          </div>
        </div>
      </div>
    </section>
  );
}

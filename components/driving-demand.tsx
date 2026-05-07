"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] as const },
  },
};

function SlideButton({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight capitalize font-medium overflow-hidden border border-transparent cursor-pointer focus:outline-none w-full md:w-auto text-base rounded-3xl transition-all duration-300 hover:rounded-xl ${
        variant === "solid"
          ? "px-6 py-3 bg-white text-[#111111] shadow-sm"
          : "bg-transparent text-[#111111]"
      }`}
    >
      <div className="relative overflow-hidden">
        {/* Text layer 1 — default */}
        <div className="transition-transform duration-300 ease-out group-hover:-translate-y-6 flex items-center gap-x-2">
          <span>{children}</span>
          <span className="inline-block align-middle text-xs mt-0.5" aria-hidden="true">↗</span>
        </div>
        {/* Text layer 2 — hover (comes up from below) */}
        <div className="absolute top-0 left-0 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-y-0 flex items-center gap-x-2">
          <span>{children}</span>
          <span className="inline-block align-middle text-xs mt-0.5" aria-hidden="true">↗</span>
        </div>
      </div>
    </Link>
  );
}

export function DrivingDemand() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#EBEBEB] overflow-hidden py-16 md:py-24 lg:py-32 z-20"
    >
      <div className="w-full px-4 md:px-7">
        {/* flex-col-reverse on mobile, flex-row on md+ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full flex justify-between items-start flex-col-reverse md:flex-row gap-x-3 md:gap-x-5 gap-y-3 md:gap-y-5"
        >
          {/* ── LEFT COLUMN: Copy + mobile-only CTAs ── */}
          <div className="w-full md:mt-2 md:mb-0 max-w-sm xl:max-w-xl 3xl:max-w-2xl flex flex-col gap-6">

            {/* Mobile CTA buttons — hidden on md+ */}
            <div className="flex flex-wrap gap-4 w-full md:hidden">
              <SlideButton href="/about" variant="solid">Our Story</SlideButton>
              <SlideButton href="/services" variant="ghost">Our Services</SlideButton>
            </div>

            <motion.p
              variants={wordVariants}
              className="text-[#111111] text-lg/tight xl:text-2xl/none font-medium tracking-tight"
            >
              A global team of search-first content marketers engineering semantic
              relevancy &amp; category signals for both the internet and people
            </motion.p>
          </div>

          {/* ── RIGHT COLUMN: Big heading + desktop CTAs ── */}
          <div className="w-full grid max-w-[24rem] md:max-w-[40rem] xl:max-w-xl 2xl:max-w-[42rem] 3xl:max-w-[52rem] gap-y-3 md:gap-y-7">

            {/* Heading */}
            <h2 className="inline-flex flex-wrap text-balance text-[#111111] text-5xl/none lg:text-6xl/none xl:text-7xl/[0.9] font-bold tracking-tight">
              <div className="flex flex-wrap items-center gap-x-2">
                {["Driving", "Demand", "&", "Discovery"].map((word, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.span
                      variants={wordVariants}
                      className="block"
                    >
                      {word}
                    </motion.span>
                  </div>
                ))}

                {/* Inline image inside heading */}
                <motion.div
                  className="inline-flex shrink-0 relative overflow-hidden bg-black/10"
                  style={{ borderRadius: "15%", width: "50px", aspectRatio: "1 / 1" }}
                  initial={{ scale: 0, rotate: -10 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
                  transition={{ delay: 0.55, type: "spring", stiffness: 220, damping: 22 }}
                >
                  <Image
                    src="https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=200&h=200&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5"
                    alt="Discovery"
                    fill
                    className="object-cover object-center"
                    sizes="50px"
                  />
                </motion.div>
              </div>
            </h2>

            {/* Desktop CTA buttons — hidden on mobile */}
            <div className="hidden md:flex flex-wrap gap-4">
              <SlideButton href="/about" variant="solid">Our Story</SlideButton>
              <SlideButton href="/services" variant="ghost">Our Services</SlideButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

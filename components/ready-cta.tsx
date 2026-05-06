"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

// Per-letter animation config extracted from the reference HTML transforms.
// "Ready to " letters are stable; "Rise at Seven?" letters progressively tilt.
const WORDS = [
  {
    text: "Ready to",
    letters: [
      { char: "R", yPct: 0, rot: 0 },
      { char: "e", yPct: 0, rot: 0 },
      { char: "a", yPct: 0, rot: 0 },
      { char: "d", yPct: 0, rot: 0 },
      { char: "y", yPct: 0, rot: 0 },
      { char: " ", yPct: 0, rot: 0 },
      { char: "t", yPct: 0, rot: 0 },
      { char: "o", yPct: 0, rot: 0 },
    ],
    stable: true,
  },
  {
    text: "Rise",
    letters: [
      { char: "R", yPct: 0.4, rot: -0.07 },
      { char: "i", yPct: 8.0, rot: -1.33 },
      { char: "s", yPct: 10.35, rot: -1.73 },
      { char: "e", yPct: -12.3, rot: 2.05 },
    ],
    stable: false,
  },
  {
    text: "at",
    letters: [
      { char: "a", yPct: -58.09, rot: 9.68 },
      { char: "t", yPct: -71.37, rot: 11.9 },
    ],
    stable: false,
  },
  {
    text: "Seven?",
    letters: [
      { char: "S", yPct: -65.44, rot: 10.9 },
      { char: "e", yPct: -60, rot: 10 },
      { char: "v", yPct: -60, rot: 10 },
      { char: "e", yPct: -60, rot: 10 },
      { char: "n", yPct: -60, rot: 10 },
      { char: "?", yPct: -60, rot: 10 },
    ],
    stable: false,
  },
];

function AnimatedLetter({
  char,
  targetY,
  targetRot,
  scrollProgress,
}: {
  char: string;
  targetY: number;
  targetRot: number;
  scrollProgress: ReturnType<typeof useSpring>;
}) {
  const y = useTransform(scrollProgress, [0, 1], ["0%", `${targetY}%`]);
  const rotate = useTransform(scrollProgress, [0, 1], [0, targetRot]);

  if (char === " ") return <span>&nbsp;</span>;

  return (
    <motion.span
      className="inline-block relative"
      style={{ y, rotate }}
      aria-hidden="true"
    >
      {char}
    </motion.span>
  );
}

export function ReadyCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Spring-smoothed progress for the letter animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#EBEBEB] overflow-hidden pt-16 pb-32 md:pt-24 md:pb-48 z-20"
    >
      {/* Massive scroll-animated headline */}
      <div className="w-full overflow-hidden px-4 md:px-7">
        <h2
          className="shrink-0 text-[#111111] text-[22vw] lg:text-[16vw] font-bold tracking-tight leading-tight"
          aria-label="Ready to Rise at Seven?"
        >
          {WORDS.map((word, wi) => (
            <span key={wi} className="inline whitespace-nowrap mr-[0.12em]">
              {word.letters.map((l, li) =>
                word.stable ? (
                  <span key={li} className="inline-block" aria-hidden="true">
                    {l.char === " " ? "\u00A0" : l.char}
                  </span>
                ) : (
                  <AnimatedLetter
                    key={li}
                    char={l.char}
                    targetY={l.yPct}
                    targetRot={l.rot}
                    scrollProgress={smoothProgress}
                  />
                )
              )}
            </span>
          ))}
        </h2>
      </div>

      {/* CTA button */}
      <div className="w-full px-4 md:px-7 mt-12 md:mt-16 flex items-center gap-6">
        <Link
          href="/contact"
          className="group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight capitalize font-medium overflow-hidden cursor-pointer focus:outline-none text-base px-8 py-4 rounded-3xl hover:rounded-xl transition-all duration-300 bg-[#111111] text-white"
        >
          <div className="relative overflow-hidden">
            <div className="transition-transform duration-300 group-hover:-translate-y-6 flex items-center gap-x-2">
              <span>Get in Touch</span>
              <span className="inline-block align-middle text-xs mt-0.5">↗</span>
            </div>
            <div className="absolute top-0 left-0 translate-y-6 transition-transform duration-300 group-hover:translate-y-0 flex items-center gap-x-2">
              <span>Get in Touch</span>
              <span className="inline-block align-middle text-xs mt-0.5">↗</span>
            </div>
          </div>
        </Link>

        <Link
          href="/services"
          className="group inline-flex shrink-0 items-center gap-x-2 text-base font-medium text-[#111111] hover:opacity-60 transition-opacity duration-300"
        >
          <span>Explore Services</span>
          <span className="text-xs">↗</span>
        </Link>
      </div>
    </section>
  );
}

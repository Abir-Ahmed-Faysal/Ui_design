"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const BLOCKS = [
  {
    id: "pioneers",
    rotate: "4deg",
    bg: "bg-black",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=800&h=800&q=90&auto=format&fit=crop",
    imageAlt: "Pioneers",
    heading: "Pioneers",
    paragraphs: [
      "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search — and we will continue to do it.",
      "We're on a mission to be the first search-first agency to win a Cannes Lion, disrupting the status quo.",
    ],
  },
  {
    id: "award-winners",
    rotate: "-3deg",
    bg: "bg-[#111111]",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5079.JPG?w=800&h=800&q=90&auto=format&fit=crop",
    imageAlt: "Award Winners",
    heading: "Award Winners",
    paragraphs: [
      "#1 Most Recommended Content Marketing Agency. Global Search Awards winners. Prolific North Champions. Our trophy cabinet speaks for itself — but our client results speak louder.",
      "We don't enter awards for vanity. We enter them because they validate the science-led creative work our clients believe in.",
    ],
  },
  {
    id: "built-for-speed",
    rotate: "2deg",
    bg: "bg-[#0a0a0a]",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-21.36.35.png?w=800&h=800&q=90&auto=format&fit=crop",
    imageAlt: "Built for Speed",
    heading: "Built for Speed",
    paragraphs: [
      "The internet moves fast. So do we. We build campaigns, content, and creative in real-time response to cultural moments — because the brands that win tomorrow are the ones who act today.",
      "No six-week strategy decks. No waiting for quarterly reviews. We are embedded, agile, and always on.",
    ],
  },
];

function PhilosophyCard({
  block,
  index,
}: {
  block: (typeof BLOCKS)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-15%" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotate: 0 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotate: block.rotate }
          : { opacity: 0, y: 60, rotate: 0 }
      }
      transition={{
        duration: 0.9,
        delay: index * 0.12,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="w-full max-w-lg xl:max-w-xl mx-auto shrink-0"
      style={{ rotate: block.rotate }}
    >
      <div
        className={`w-full flex flex-col text-center rounded-2xl grid p-7 lg:rounded-3xl lg:aspect-square xl:py-10 xl:px-14 ${block.bg}`}
      >
        <div className="col-start-1 row-start-1 flex flex-col items-center text-center gap-y-3 md:gap-y-5">
          {/* Image */}
          <div className="rounded-xl overflow-hidden w-full aspect-[4/3] relative lg:aspect-square lg:rounded-2xl lg:w-48">
            <Image
              src={block.image}
              alt={block.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 192px"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col items-center gap-y-4">
            <h2 className="text-white text-3xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-none text-center">
              {block.heading}
            </h2>
            <div className="w-full">
              {block.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`text-sm lg:text-base text-white font-medium leading-normal text-pretty ${
                    i < block.paragraphs.length - 1 ? "mb-5" : ""
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function StackedCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax for the entire section
  const sectionY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#EBEBEB] overflow-hidden py-20 md:py-32 xl:py-48 z-20"
    >
      {/* Section label */}
      <div className="w-full px-4 md:px-7 mb-12 md:mb-20">
        <p className="text-[#111111]/50 text-sm font-medium uppercase tracking-widest">
          Why Rise at Seven
        </p>
      </div>

      {/* Cards layout */}
      <motion.div
        style={{ y: sectionY }}
        className="w-full px-4 md:px-7 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 xl:gap-10 items-start"
      >
        {BLOCKS.map((block, i) => (
          <PhilosophyCard key={block.id} block={block} index={i} />
        ))}
      </motion.div>

      {/* Decorative bottom statement */}
      <div className="w-full px-4 md:px-7 mt-20 md:mt-32">
        <p className="text-[#111111] text-3xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-[0.95] max-w-4xl">
          The agency built to lead the
          <br />
          next era of discovery.
        </p>
      </div>
    </section>
  );
}

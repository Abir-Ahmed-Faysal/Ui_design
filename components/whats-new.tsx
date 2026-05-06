"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const POSTS = [
  {
    id: 1,
    href: "/blog/global-operations-director-promotion",
    category: "News",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=800&h=800&q=90&auto=format&fit=crop",
    author: {
      name: "Carrie Rose",
      avatar:
        "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/84b3917f166d7feb4c2376f78ce33ae432656999.jpg?w=80&h=80&q=90&auto=format&fit=crop",
    },
    readTime: "2 mins",
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
  },
  {
    id: 2,
    href: "/blog/coneys-chooses-riseatseven-for-demand-brief",
    category: "Food/Hospitality/Drink",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/3-copy.jpg?w=800&h=800&q=90&auto=format&fit=crop",
    author: {
      name: "Ray Saddiq",
      avatar:
        "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=80&h=80&q=90&auto=format&fit=crop",
    },
    readTime: "2 mins",
    title:
      "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth in the Chocolate Confectionery Category",
  },
  {
    id: 3,
    href: "/blog/noomz-chooses-riseatseven-for-demand-brief",
    category: "Food/Hospitality/Drink",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Noomz1-4.jpg?w=800&h=800&q=90&auto=format&fit=crop",
    author: {
      name: "Carrie Rose",
      avatar:
        "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/84b3917f166d7feb4c2376f78ce33ae432656999.jpg?w=80&h=80&q=90&auto=format&fit=crop",
    },
    readTime: "2 mins",
    title:
      "Rise at Seven Appointed by Langtins to drive demand and retail growth for Noomz",
  },
  {
    id: 4,
    href: "/blog/search-first-strategy-2025",
    category: "Strategy",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-21.36.35.png?w=800&h=800&q=90&auto=format&fit=crop",
    author: {
      name: "Carrie Rose",
      avatar:
        "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/84b3917f166d7feb4c2376f78ce33ae432656999.jpg?w=80&h=80&q=90&auto=format&fit=crop",
    },
    readTime: "4 mins",
    title:
      "The Search-First Strategy That's Changing How Brands Win in 2025",
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

function PostCard({ post }: { post: (typeof POSTS)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <Link
      href={post.href}
      className="w-full flex flex-col items-start gap-y-5 hover:-translate-y-2 transition-transform duration-500 shrink-0"
      style={{ width: "min(603px, 85vw)" }}
    >
      {/* ── Card image area ── */}
      <div
        ref={cardRef}
        className="w-full grid relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Category pill — top-left overlay */}
        <div className="col-start-1 row-start-1 z-20 p-3 relative">
          <div className="flex flex-wrap gap-1">
            <span className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 text-white bg-white/20 backdrop-blur-sm">
              {post.category}
            </span>
          </div>
        </div>

        {/* Blurred image — circle-mask reveal layer (z-10) */}
        <div className="col-start-1 row-start-1 z-10 relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-square">
          <div
            className="w-full h-full transition-all duration-700"
            style={{
              clipPath: isHovered
                ? `circle(150% at ${mousePos.x}% ${mousePos.y}%)`
                : `circle(0% at ${mousePos.x}% ${mousePos.y}%)`,
              filter: "blur(12px)",
              transform: "scale(1.2)",
            }}
          >
            <Image
              src={post.img}
              alt={post.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 85vw, 603px"
            />
          </div>
        </div>

        {/* Sharp image — base layer, always visible */}
        <div className="col-start-1 row-start-1 aspect-square relative rounded-2xl lg:rounded-3xl overflow-hidden">
          <Image
            src={post.img}
            alt={post.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 85vw, 603px"
          />
        </div>
      </div>

      {/* ── Meta + title ── */}
      <div className="flex flex-col items-start gap-y-3">
        {/* Author + read time pills */}
        <div className="flex items-center gap-1 mt-1 flex-wrap">
          {/* Author pill */}
          <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 text-[#555] bg-white">
            <div className="inline-flex items-center justify-center -ml-1.5">
              <div className="rounded-full overflow-hidden w-5 h-5 -mr-1 shrink-0">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={20}
                  height={20}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <span>{post.author.name}</span>
          </div>

          {/* Read time pill */}
          <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 text-[#555] bg-white">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[#111111] text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-balance">
          {post.title}
        </h3>
      </div>
    </Link>
  );
}

export function WhatsNew() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const [progress, setProgress] = useState(0);

  // Track scroll progress of the carousel
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scroller;
      const max = scrollWidth - clientWidth;
      setProgress(max > 0 ? scrollLeft / max : 0);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="w-full pb-12 xl:pb-24 bg-[#EBEBEB] z-20 relative">
      <div className="w-full px-0">
        <div className="grid grid-cols-12 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">

          {/* ── Section header ── */}
          <div className="col-span-12 px-4 md:px-7">
            <div className="grid grid-cols-12 md:border-b md:border-[#111111]/15 md:pb-5 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">
              <div className="col-span-11 md:col-span-9 flex items-end">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  className="inline-flex flex-wrap items-end text-balance text-[#111111] text-6xl md:text-7xl lg:text-7xl 2xl:text-8xl font-bold tracking-tight leading-[0.9]"
                >
                  <span className="mr-3">What&apos;s</span>
                  {/* Inline springing image */}
                  <motion.span
                    className="inline-flex shrink-0 relative overflow-hidden bg-black/10 mr-3 align-middle"
                    style={{ borderRadius: "15%", width: "90px", height: "0.85em" }}
                    initial={{ scale: 0, rotate: -8 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.3, type: "spring", stiffness: 220, damping: 22 }}
                  >
                    <Image
                      src="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=90&auto=format&fit=crop"
                      alt="What's New"
                      fill
                      className="object-cover object-center"
                      sizes="90px"
                    />
                  </motion.span>
                  <span>New</span>
                </motion.h2>
              </div>

              {/* Desktop CTA */}
              <div className="col-span-12 md:col-span-3 md:items-center md:justify-end hidden md:flex">
                <SlideButton href="/blog">Explore More Thoughts</SlideButton>
              </div>
            </div>
          </div>

          {/* ── Card carousel ── */}
          <div className="col-span-12 lg:px-7">
            <div
              ref={scrollerRef}
              className="w-full flex gap-x-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 lg:px-0 pb-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {POSTS.map((post) => (
                <div key={post.id} className="snap-start py-2 shrink-0">
                  <PostCard post={post} />
                </div>
              ))}
            </div>

            {/* Scroll progress bar */}
            <div className="w-full relative py-3 mt-5 px-4 md:px-7">
              <div className="w-full relative h-px bg-[#111111]/15">
                <div
                  className="absolute top-0 left-0 h-full bg-[#111111] transition-all duration-100"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="col-span-12 md:hidden px-4 md:px-7">
            <SlideButton href="/blog">Explore More Thoughts</SlideButton>
          </div>
        </div>
      </div>
    </section>
  );
}

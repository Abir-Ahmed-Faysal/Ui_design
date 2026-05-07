"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./logo";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/services/b2b-marketing" },
  { label: "International", href: "/international" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Webinar", href: "/webinars" },
  { label: "Get in touch", href: "/connect-with-us" },
];

const menuVariants = {
  initial: { y: "-100%" },
  animate: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.2,
    },
  },
};

const linkContainerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.4,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const linkVariants = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-10 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled || isMenuOpen ? "bg-black/80 backdrop-blur-xl border-b border-white/5 h-20" : "bg-transparent h-24"
        }`}
      >
        <div className="container-fluid px-container h-full flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="relative z-[60] flex w-32 md:w-40 text-pure-white hover:text-mint transition-colors duration-300">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center ml-12 space-x-1">
              {NAV_LINKS.filter(l => l.label !== "Get in touch").map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-pure-white px-4 py-2 font-medium tracking-tight hover:text-mint transition-colors text-sm uppercase"
                >
                  {link.label}
                  {link.label === "Work" && (
                    <span className="inline-flex items-center justify-center bg-mint text-black text-[9px] px-1.5 py-0.5 rounded-full ml-1 absolute -mt-2 font-bold">
                      24
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6 relative z-[60]">
            <Link 
              href="/connect-with-us"
              className="hidden md:inline-flex group items-center justify-center bg-mint text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get in touch
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 19L19 5M19 5v10M19 5H9" />
                </svg>
              </span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex flex-col items-end justify-center w-10 h-10 group"
              aria-label="Toggle menu"
            >
              <div className={`h-0.5 bg-pure-white transition-all duration-500 mb-1.5 ${isMenuOpen ? "w-8 rotate-45 translate-y-2" : "w-8"}`} />
              <div className={`h-0.5 bg-pure-white transition-all duration-500 ${isMenuOpen ? "w-8 -rotate-45" : "w-5 group-hover:w-8"}`} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-40 bg-black text-pure-white flex flex-col justify-center pt-24 px-container"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               {/* Editorial background elements if needed */}
            </div>
            
            <motion.nav
              variants={linkContainerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col gap-2"
            >
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="overflow-hidden">
                  <motion.div variants={linkVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group text-5xl sm:text-7xl md:text-8xl font-bold uppercase tracking-tighter transition-all inline-block relative hover:text-mint"
                    >
                      {link.label}
                      <span className="absolute left-0 bottom-0 w-full h-[0.05em] bg-mint origin-left scale-x-0 transition-transform duration-500 ease-custom group-hover:scale-x-100" />
                    </Link>
                  </motion.div>
                </div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

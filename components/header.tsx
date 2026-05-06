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
  initial: { x: "100%" },
  animate: {
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.2, // Wait for links to exit
    },
  },
};

const linkContainerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
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
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-10 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen ? "backdrop-blur-md bg-deep-black/60" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="relative z-[60] flex w-32 md:w-40 text-pure-white">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center ml-10 space-x-1">
              {NAV_LINKS.filter(l => l.label !== "Get in touch").map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-pure-white px-4 py-2 font-medium tracking-tight hover:text-gray-300 transition-colors text-sm"
                >
                  {link.label}
                  {link.label === "Work" && (
                    <span className="inline-flex items-center justify-center bg-[#a6ffed] text-deep-black text-[10px] px-1.5 py-0.5 rounded-full ml-1 absolute -mt-3">
                      25
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4 relative z-[60]">
            <Link 
              href="/connect-with-us"
              className="hidden md:inline-flex group items-center justify-center bg-pure-white text-deep-black px-6 py-2.5 rounded-full font-medium hover:scale-105 transition-transform duration-300 overflow-hidden relative"
            >
              <div className="relative flex items-center">
                <span>Get in touch</span>
                <svg className="ml-2 w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19L19 5M19 5v10M19 5H9" />
                </svg>
              </div>
            </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center w-12 h-8 relative z-[60]"
            aria-label="Toggle menu"
          >
            <div className="flex w-5 h-2 flex-col items-start justify-between">
              <div
                className={`w-full h-px relative -top-px transition-transform duration-500 transform ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "rotate-0"
                }`}
              >
                <div className="w-full h-0.5 bg-pure-white"></div>
              </div>
              <div
                className={`w-full h-px transition-transform duration-500 transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "rotate-0"
                }`}
              >
                <div className="w-full h-0.5 bg-pure-white"></div>
              </div>
            </div>
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
            className="fixed inset-0 z-40 bg-deep-black text-pure-white flex flex-col justify-center px-6 md:px-16 lg:px-32"
          >
            <motion.nav
              variants={linkContainerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col gap-4 md:gap-6"
            >
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="overflow-hidden">
                  <motion.div variants={linkVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group text-5xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tighter transition-colors inline-block relative"
                    >
                      {link.label}
                      <span className="absolute left-0 bottom-0 w-full h-[0.08em] bg-pure-white origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100" />
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

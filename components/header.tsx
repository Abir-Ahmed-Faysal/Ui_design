"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
          <Link href="/" className="relative z-[60] flex items-center">
            <motion.span 
              layoutId="brand-logo" 
              className="text-pure-white text-2xl font-bold tracking-tighter inline-block origin-left"
            >
              Rise at Seven
            </motion.span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-pure-white p-2 relative z-[60]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
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

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./logo";

const NAV_LINKS = [
  { label: "Services", href: "/services", hasMega: true },
  { label: "Industries", href: "/services/b2b-marketing", hasMega: true },
  { label: "International", href: "/international", hasMega: true },
  { label: "About", href: "/about", hasMega: true },
  { label: "Work", href: "/work", hasBadge: true },
  { label: "Careers", href: "/careers" },
  { label: "Blog & Resources", href: "/blog", hasMega: true },
  { label: "Webinar", href: "/webinars" },
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
} as const;

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
} as const;

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
} as const;

const MEGA_MENU_DATA = {
  "Services": {
    id: "102",
    categories: [
      {
        title: "Core Services",
        links: [
          { label: "Search & Growth Strategy", href: "/services/strategy-growth", id: "4790", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.14.49.png?w=800&h=800&q=80&fm=webp&fit=crop" },
          { label: "Onsite SEO", href: "/services/onsite-seo", id: "11981", image: "https://rise-atseven.transforms.svdcdn.com/production/images/WhatsApp-Image-2025-06-03-at-08.34.50.jpeg?w=800&h=800&q=80&fm=webp&fit=crop" },
          { label: "Content Experience", href: "/services/content-experience", id: "4789", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.16.14.png?w=800&h=800&q=80&fm=webp&fit=crop" },
          { label: "B2B Marketing", href: "/services/b2b-marketing", id: "22669", image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A6875.jpg?w=800&h=800&q=80&fm=webp&fit=crop" },
        ]
      },
      {
        title: "",
        links: [
          { label: "Digital PR", href: "/services/digital-pr", id: "12019", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png?w=800&h=800&q=80&fm=webp&fit=crop" },
          { label: "Social Media & Campaigns", href: "/services/social", id: "12020", image: "https://rise-atseven.transforms.svdcdn.com/production/images/temp_image_43CEDE6C-4430-479F-9DBF-B348FA9AC991.WEBP?w=800&h=800&q=80&fm=webp&fit=crop" },
          { label: "Data & Insights", href: "/services/data-insights", id: "12021", image: "https://rise-atseven.transforms.svdcdn.com/production/images/data.jpg?w=800&h=800&q=80&fm=webp&fit=crop" },
          { label: "Social SEO/Search", href: "/services/social-seo-tiktok-youtube", id: "16559", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-09-24-at-11.47.25.png?w=800&h=800&q=80&fm=webp&fit=crop" },
        ]
      }
    ],
    footer: { label: "View all services", href: "/services" }
  },
  "Industries": {
    id: "23929",
    categories: [
      {
        title: "",
        links: [
          { label: "B2B Marketing", href: "/services/b2b-marketing", id: "23931", image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A6875.jpg?w=800&h=800&q=80&fm=webp&fit=crop" }
        ]
      }
    ]
  },
  "International": {
    id: "103",
    categories: [
      {
        title: "",
        links: [
          { label: "US Digital PR", href: "/international/us-digital-pr", id: "4762", image: "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=800&h=800&q=80&fm=webp&fit=crop" },
          { label: "Spain Digital PR", href: "/spain-digital-pr", id: "23207", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos_2026-04-23-101020_frxy.jpg?w=800&h=800&q=80&fm=webp&fit=crop" },
          { label: "Germany Digital PR", href: "/germany-digital-pr", id: "23208", image: "https://rise-atseven.transforms.svdcdn.com/production/images/27.jpg?w=800&h=800&q=80&fm=webp&fit=crop" },
          { label: "Netherlands Digital PR", href: "/netherlands-digital-pr", id: "23603", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos_2026-04-23-095313_xfhk.jpg?w=800&h=800&q=80&fm=webp&fit=crop" },
        ]
      }
    ]
  },
  "About": {
    id: "16913",
    categories: [
      {
        title: "",
        links: [
          { label: "About Us", href: "/about", id: "16915", image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7487.jpg?w=800&h=800&q=80&fm=webp&fit=crop" },
          { label: "Meet The Risers", href: "/meet-the-team", id: "16916", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.14.49.png?w=800&h=800&q=80&fm=webp&fit=crop" },
          { label: "Culture", href: "/culture", id: "16917", image: "https://rise-atseven.transforms.svdcdn.com/production/images/IMG_4280-2.jpg?w=800&h=800&q=80&fm=webp&fit=crop" },
          { label: "Testimonials", href: "/testimonials", id: "16918", image: "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=800&h=800&q=80&fm=webp&fit=crop" },
        ]
      }
    ]
  },
  "Blog & Resources": {
    id: "106",
    categories: [
      {
        title: "",
        links: [
          { label: "Blog", href: "/blog", id: "24144", image: "https://rise-atseven.transforms.svdcdn.com/production/images/RedBull-Instagram-Post-45.png?w=800&h=800&q=80&fm=webp&fit=crop" },
          { label: "Category Leaderboard", href: "/category-leaderboard", id: "24145", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.14.49.png?w=800&h=800&q=80&fm=webp&fit=crop" },
          { label: "Multi-Channel Search Report", href: "/multi-channel-search-report-2026-", id: "24146", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-09-24-at-11.47.25.png?w=800&h=800&q=80&fm=webp&fit=crop" },
        ]
      }
    ]
  }
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [hideAnnouncementBar, setHideAnnouncementBar] = useState(false);
  const [hideHeaderBackground, setHideHeaderBackground] = useState(true);
  const [hoverData, setHoverData] = useState<{ width: number; left: number } | null>(null);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);
  
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [activeSubLinkId, setActiveSubLinkId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollDirection = scrollPosition > previousScrollPosition ? "down" : "up";

      if (scrollPosition > 20) setHideAnnouncementBar(true);
      else setHideAnnouncementBar(false);

      if (scrollDirection === "down" && scrollPosition > 100) setHideHeader(true);
      else setHideHeader(false);

      if (scrollPosition > 100) setHideHeaderBackground(false);
      else setHideHeaderBackground(true);

      setPreviousScrollPosition(scrollPosition);
      setIsScrolled(scrollPosition > 40);

      window.dispatchEvent(new CustomEvent("announcement-scroll", { detail: { hide: scrollPosition > 20 } }));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [previousScrollPosition]);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isMenuOpen]);

  const updateHoverBackground = (e: React.MouseEvent<HTMLAnchorElement> | null, menuId?: string) => {
    if (e) {
      const targetRect = e.currentTarget.getBoundingClientRect();
      const parentRect = e.currentTarget.parentElement?.parentElement?.getBoundingClientRect();
      if (parentRect) {
        setHoverData({
          width: targetRect.width,
          left: targetRect.left - parentRect.left,
        });
      }
      if (menuId) {
        setActiveMegaMenu(menuId);
        // Set first sublink as active by default for preview
        const firstLink = Object.values(MEGA_MENU_DATA).find(m => m.id === menuId)?.categories[0].links[0];
        if (firstLink) setActiveSubLinkId(firstLink.id);
      }
    } else {
      setHoverData(null);
      if (!activeMegaMenu) setActiveMegaMenu(null);
    }
  };

  return (
    <>
      {/* Backdrop Blur for Mega Menu */}
      <AnimatePresence>
        {activeMegaMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-lg z-40 pointer-events-auto"
            onMouseEnter={() => setActiveMegaMenu(null)}
          />
        )}
      </AnimatePresence>

      <header
        className={`fixed left-0 w-full z-50 transition-all duration-700 ${
          hideHeader ? "-translate-y-full" : "translate-y-0"
        } ${
          hideAnnouncementBar ? "top-0" : "top-[52px]"
        } ${
          !hideHeaderBackground || isMenuOpen || activeMegaMenu ? "bg-white/60 backdrop-blur-xl border-b border-black/5" : "bg-transparent"
        }`}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <div className="container-fluid px-container h-20 lg:h-22 grid grid-cols-[200px_1fr_200px] items-center">
          <div className="flex items-center">
            <Link 
              href="/" 
              className={`relative z-[60] flex w-32 md:w-40 transition-colors duration-300 ${
                !hideHeaderBackground || isMenuOpen || activeMegaMenu ? "text-black" : "text-pure-white"
              }`}
            >
              <Logo />
            </Link>
          </div>

          <nav 
            className="hidden xl:flex items-center justify-center relative group/links"
            onMouseLeave={() => updateHoverBackground(null)}
          >
            <div 
              className="absolute bg-black/5 h-10 rounded-full transition-all duration-300 opacity-0 group-hover/links:opacity-100 pointer-events-none"
              style={{
                width: hoverData?.width || 0,
                left: hoverData?.left || 0,
              }}
            />

            {NAV_LINKS.map(link => {
              const megaData = (MEGA_MENU_DATA as any)[link.label];
              const hasMega = link.hasMega;
              
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onMouseEnter={(e) => updateHoverBackground(e, hasMega ? megaData?.id : undefined)}
                  className={`group inline-flex tracking-tight leading-tight font-medium relative text-[13px] uppercase px-4 py-1 transition-colors duration-300 ${
                    !hideHeaderBackground || isMenuOpen || activeMegaMenu ? "text-grey-900 hover:text-black" : "text-pure-white hover:text-mint"
                  }`}
                >
                  <div className="relative">
                    <div className="relative overflow-hidden truncate">
                      <div className="transition duration-500 ease-custom group-hover:-translate-y-8">
                        {link.label} {hasMega && <span className="opacity-50 ml-1">+</span>}
                      </div>
                      <div className="transition absolute top-0 left-0 translate-y-8 duration-500 ease-custom group-hover:translate-y-0">
                        {link.label} {hasMega && <span className="opacity-50 ml-1">+</span>}
                      </div>
                    </div>

                    {link.hasBadge && (
                      <div className="inline-flex pointer-events-none absolute top-0 right-0 -translate-y-2.5 translate-x-3 rounded-full px-1.5 py-0.5 text-[10px] font-medium leading-none transition-transform duration-500 ease-custom group-hover:-translate-y-4 bg-mint text-grey-900">
                        25
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>


          <div className="flex items-center gap-6 relative z-[60]">
            <Link 
              href="/connect-with-us"
              className={`hidden md:inline-flex group items-center justify-center px-6 py-3 rounded-full font-bold hover:rounded-xl transition-all duration-500 relative overflow-hidden flex-row-reverse gap-x-2 ${
                !hideHeaderBackground || isMenuOpen || activeMegaMenu ? "bg-grey-900 text-white" : "bg-white text-grey-900"
              }`}
            >
              <div className="relative overflow-hidden h-6 flex items-center">
                <div className="transition duration-500 group-hover:-translate-y-6">
                  <span className="flex items-center gap-2 font-semibold">
                    Get in touch
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 19L19 5M19 5v10M19 5H9" />
                    </svg>
                  </span>
                </div>
                <div className="transition absolute top-0 left-0 translate-y-6 duration-500 group-hover:translate-y-0">
                  <span className="flex items-center gap-2 font-semibold text-mint">
                    Get in touch
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 19L19 5M19 5v10M19 5H9" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex flex-col items-end justify-center w-10 h-10 group"
              aria-label="Toggle menu"
            >
              <div className={`h-0.5 transition-all duration-500 mb-1.5 ${
                !hideHeaderBackground || isMenuOpen || activeMegaMenu ? "bg-grey-900" : "bg-pure-white"
              } ${isMenuOpen ? "w-8 rotate-45 translate-y-2" : "w-8"}`} />
              <div className={`h-0.5 transition-all duration-500 ${
                !hideHeaderBackground || isMenuOpen || activeMegaMenu ? "bg-grey-900" : "bg-pure-white"
              } ${isMenuOpen ? "w-8 -rotate-45" : "w-5 group-hover:w-8"}`} />
            </button>
          </div>
        </div>

        {/* MEGA MENU CONTAINER */}
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="absolute top-full left-1/2 -translate-x-1/2 w-[95vw] max-w-6xl pt-10"
            >
              <div className="bg-white rounded-[2.5rem] shadow-2xl flex overflow-hidden min-h-[400px]">
                {Object.entries(MEGA_MENU_DATA).map(([key, data]) => {
                  if (data.id !== activeMegaMenu) return null;
                  
                  return (
                    <div key={key} className="flex w-full">
                      {/* Left Side: Links */}
                      <div className="flex-1 px-12 py-16 flex items-center justify-center">
                        <div className="flex gap-x-20">
                          {data.categories.map((cat, idx) => (
                            <div key={idx} className="flex flex-col">
                              {cat.title && (
                                <span className="text-grey-300 text-sm font-medium uppercase tracking-widest mb-6 block">
                                  {cat.title}
                                </span>
                              )}
                              <div className="flex flex-col gap-y-2">
                                {cat.links.map(link => (
                                  <Link
                                    key={link.id}
                                    href={link.href}
                                    onMouseEnter={() => setActiveSubLinkId(link.id)}
                                    className="group inline-flex tracking-tight leading-tight font-bold text-2xl relative text-grey-900 hover:text-black"
                                  >
                                    <div className="relative overflow-hidden truncate">
                                      <div className="transition duration-500 group-hover:-translate-y-8">
                                        {link.label}
                                      </div>
                                      <div className="transition absolute top-0 left-0 translate-y-8 duration-500 group-hover:translate-y-0">
                                        {link.label}
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Side: Preview */}
                      <div className="w-80 shrink-0 p-3 relative bg-grey-50">
                        {data.footer && (
                          <div className="absolute bottom-6 left-6 right-6 z-20">
                            <Link 
                              href={data.footer.href}
                              className="w-full bg-grey-900 text-white rounded-2xl py-4 px-6 flex items-center justify-between font-bold group hover:rounded-lg transition-all duration-300"
                            >
                              {data.footer.label}
                              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 19L19 5M19 5v10M19 5H9" />
                              </svg>
                            </Link>
                          </div>
                        )}
                        
                        <div className="relative rounded-3xl overflow-hidden aspect-square bg-grey-200">
                          <AnimatePresence mode="wait">
                            {data.categories.flatMap(c => c.links).map(link => (
                              link.id === activeSubLinkId && (
                                <motion.div
                                  key={link.id}
                                  initial={{ opacity: 0, scale: 1.1 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 1.05 }}
                                  transition={{ duration: 0.4 }}
                                  className="absolute inset-0"
                                >
                                  <img 
                                    src={link.image} 
                                    alt={link.label}
                                    className="w-full h-full object-cover"
                                  />
                                </motion.div>
                              )
                            ))}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-50 bg-black text-pure-white flex flex-col justify-center pt-24 px-container"
          >

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

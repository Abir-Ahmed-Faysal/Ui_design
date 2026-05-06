"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function AnnouncementBar() {
  const text = "🚨 The Category Leaderboard - Live Now";
  
  // Create enough repetition to ensure smooth continuous scrolling
  const items = Array(15).fill(text);

  return (
    <Link 
      href="/category-leaderboard" 
      className="group block fixed top-0 left-0 z-[100] w-full h-10 overflow-hidden bg-[#a6ffed] hover:bg-[#6afbdf] transition-colors duration-500 cursor-pointer flex items-center shrink-0"
    >
      <div className="flex whitespace-nowrap overflow-hidden items-center w-full h-full">
        <motion.div
          className="flex whitespace-nowrap shrink-0 items-center h-full"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 25, 
            ease: "linear" 
          }}
        >
          {/* First set */}
          <div className="flex shrink-0 items-center h-full">
            {items.map((t, i) => (
              <span key={`a-${i}`} className="text-deep-black font-semibold tracking-tight text-xs sm:text-sm px-6 whitespace-nowrap">
                {t}
              </span>
            ))}
          </div>
          {/* Second set for seamless loop */}
          <div className="flex shrink-0 items-center h-full">
            {items.map((t, i) => (
              <span key={`b-${i}`} className="text-deep-black font-semibold tracking-tight text-xs sm:text-sm px-6 whitespace-nowrap">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Link>
  );
}

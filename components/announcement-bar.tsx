"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function AnnouncementBar() {
  const text = "Discover who is winning on every searchable platform";
  const items = Array(10).fill(text);

  return (
    <Link 
      href="/category-leaderboard" 
      className="group block fixed top-0 left-0 z-[100] w-full h-10 overflow-hidden bg-mint hover:bg-mint/90 transition-colors duration-500 cursor-pointer flex items-center shrink-0 border-b border-black/5"
    >
      <div className="flex whitespace-nowrap overflow-hidden items-center w-full h-full">
        <motion.div
          className="flex whitespace-nowrap shrink-0 items-center h-full"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 30, 
            ease: "linear" 
          }}
        >
          <div className="flex shrink-0 items-center h-full">
            {items.map((t, i) => (
              <span key={`a-${i}`} className="text-black font-bold tracking-tight text-xs uppercase px-8 whitespace-nowrap flex items-center">
                <span className="mr-2">Category Leaderboard</span>
                <span className="font-medium opacity-80">— {t}</span>
              </span>
            ))}
          </div>
          <div className="flex shrink-0 items-center h-full">
            {items.map((t, i) => (
              <span key={`b-${i}`} className="text-black font-bold tracking-tight text-xs uppercase px-8 whitespace-nowrap flex items-center">
                <span className="mr-2">Category Leaderboard</span>
                <span className="font-medium opacity-80">— {t}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Link>
  );
}

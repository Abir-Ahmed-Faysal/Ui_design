/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function AnnouncementBar() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = (e: any) => {
      setHide(e.detail.hide);
    };
    window.addEventListener("announcement-scroll", handleScroll);
    return () => window.removeEventListener("announcement-scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-[100] bg-white p-2.5 flex justify-center border-b border-black/5 transition-all duration-500 ${
      hide ? "opacity-0 pointer-events-none -translate-y-full" : "opacity-100 translate-y-0"
    }`}>
      <Link 
        href="/category-leaderboard" 
        className="group flex justify-center items-center text-xs text-center py-2 px-5 text-balance tracking-tight leading-none font-semibold rounded-2xl transition-all duration-500 lg:text-sm text-grey-900 bg-[#B2F6E3] pointer-fine:hover:rounded-md hover:brightness-95 shadow-sm w-full"
      >
        {/* Mobile Version */}
        <div className="block lg:hidden mt-0.5">
          🚨 The Category Leaderboard - Live Now
        </div>

        {/* Desktop Version with Animation */}
        <div className="relative overflow-hidden mt-0.5 hidden lg:block h-4">
          <div className="transition duration-500 group-hover:-translate-y-6">
            🚨 The Category Leaderboard - Live Now
          </div>
          <div className="transition duration-500 absolute top-0 left-0 translate-y-6 group-hover:translate-y-0">
            🚨 The Category Leaderboard - Live Now
          </div>
        </div>
      </Link>
    </div>
  );
}

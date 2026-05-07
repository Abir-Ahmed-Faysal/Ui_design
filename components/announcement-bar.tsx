"use client";

import Link from "next/link";

export function AnnouncementBar() {
  return (
    <Link 
      href="/category-leaderboard" 
      className="group flex justify-center z-[100] fixed top-0 left-0 w-full relative items-center text-xs py-2 px-5 text-balance tracking-tight leading-none font-semibold rounded-2xl transition-all duration-500 lg:text-sm hover:rounded-md text-black bg-mint hover:bg-mint/90 cursor-pointer border-b border-black/5"
    >
      {/* Mobile Version */}
      <div className="block lg:hidden mt-0.5">
        🎉 The Category Leaderboard - Live Now
      </div>

      {/* Desktop Version with Animation */}
      <div className="relative overflow-hidden mt-0.5 hidden lg:block">
        <div className="transition duration-500 group-hover:-translate-y-6">
          🎉 The Category Leaderboard - Live Now
        </div>
        <div className="transition duration-500 absolute top-0 left-0 translate-y-6 group-hover:translate-y-0">
          🎉 The Category Leaderboard - Live Now
        </div>
      </div>
    </Link>
  );
}

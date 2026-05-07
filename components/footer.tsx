"use client";

import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-[80vh] md:h-screen bg-mint z-0 flex flex-col pt-20 pb-10 px-container overflow-hidden">
      <div className="relative z-10 flex flex-col h-full">
        
        {/* Massive CTA */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-black text-[clamp(4rem,15vw,20rem)] font-bold uppercase tracking-tighter leading-[0.75]">
            Discover <br /> More
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12 mt-12 items-start">
             <Link href="/work" className="group text-black text-3xl md:text-5xl font-bold uppercase tracking-tighter border-b-2 border-black pb-2 hover:border-transparent transition-all">
                Our Work <span className="group-hover:translate-x-2 inline-block transition-transform">→</span>
             </Link>
             <Link href="/about" className="group text-black text-3xl md:text-5xl font-bold uppercase tracking-tighter border-b-2 border-black pb-2 hover:border-transparent transition-all">
                About Us <span className="group-hover:translate-x-2 inline-block transition-transform">→</span>
             </Link>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-black/10 pt-12 mt-auto">
          <div className="flex flex-col gap-4">
            <span className="text-black/40 text-[10px] font-bold uppercase tracking-widest">Offices</span>
            <div className="flex flex-col text-black font-bold uppercase text-xs gap-2">
              <span>Sheffield</span>
              <span>Manchester</span>
              <span>London</span>
              <span>New York</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <span className="text-black/40 text-[10px] font-bold uppercase tracking-widest">Connect</span>
            <div className="flex flex-col text-black font-bold uppercase text-xs gap-2">
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">TikTok</a>
              <a href="#">Twitter</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-black/40 text-[10px] font-bold uppercase tracking-widest">Legal</span>
            <div className="flex flex-col text-black font-bold uppercase text-xs gap-2">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>

          <div className="flex flex-col items-end justify-end">
             <div className="w-32 md:w-48 text-black opacity-10">
                <Logo />
             </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-black/5 text-[10px] font-bold uppercase tracking-widest text-black/40">
           <span>© 2026 Rise at Seven</span>
           <span>Award Winning Search-First Agency</span>
        </div>
      </div>

      {/* Decorative large logo in background */}
      <div className="absolute -bottom-20 -right-20 text-black/5 pointer-events-none select-none">
         <div className="scale-[5] origin-bottom-right">
            <Logo />
         </div>
      </div>
    </footer>
  );
}

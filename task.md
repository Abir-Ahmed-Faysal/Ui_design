"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          setHidden(true);
        }, 300);
      },
    });

    tl.to(".loader-circle", {
      scale: 20,
      duration: 1.8,
      ease: "power4.inOut",
    });

    tl.to(
      ".loader-text",
      {
        opacity: 0,
        y: -40,
        duration: 0.5,
      },
      0.2
    );
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#d9ff3f]">
      {/* TEXT */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="loader-text text-black text-3xl md:text-6xl font-semibold tracking-tight">
          Rise at Seven
        </h1>
      </div>

      {/* PAINT / HALF CIRCLE */}
      <div className="absolute bottom-[-25vw] left-1/2 -translate-x-1/2">
        <div
          className="
            loader-circle
            w-[140vw]
            h-[140vw]
            rounded-full
            bg-black
            scale-0
          "
        />
      </div>
    </div>
  );
}
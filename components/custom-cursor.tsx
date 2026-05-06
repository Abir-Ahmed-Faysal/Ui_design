"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Quick springs for a responsive, snappy cursor follower
  const cursorX = useSpring(-100, { stiffness: 500, damping: 28, mass: 0.5 });
  const cursorY = useSpring(-100, { stiffness: 500, damping: 28, mass: 0.5 });

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12); // Center the 24px cursor (offset by half width/height)
      cursorY.set(e.clientY - 12);
      
      const target = e.target as HTMLElement;
      // Detect if we are hovering over interactive elements
      if (target.closest('a') || target.closest('button') || target.closest('[data-cursor="hover"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (pointer: fine) {
          body * { cursor: none !important; }
        }
      `}} />
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 1)",
          borderColor: isHovering ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0)",
        }}
        transition={{ scale: { duration: 0.2 }, backgroundColor: { duration: 0.2 } }}
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] border mix-blend-difference"
      />
    </>
  );
}

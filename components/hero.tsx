"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollY } = useScroll();
  // Parallax effect: moves the background video slightly slower than the scroll
  const y = useTransform(scrollY, [0, 1000], [0, 300]); 

  useEffect(() => {
    // Simulate loading time to show the Transition Loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Transition Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-deep-black"
            exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          >
            <motion.div
              initial={{ scale: 1, y: 0, x: 0 }}
              // Moves towards the top-left (Header logo position) and scales down
              animate={{ scale: 0.3, y: "-40vh", x: "-40vw", opacity: 0 }} 
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.6 }}
              className="text-pure-white text-6xl md:text-9xl font-bold tracking-tighter whitespace-nowrap origin-center"
            >
              Rise at Seven
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative h-screen w-full overflow-hidden bg-deep-black flex items-center justify-center">
        {/* Parallax Background Video */}
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          {/* High-quality placeholder video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full opacity-50"
          >
            <source src="https://cdn.pixabay.com/video/2021/08/04/83864-584742721_large.mp4" type="video/mp4" />
          </video>
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black/60 via-transparent to-deep-black/90" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center pt-24">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 100 : 0 }}
            transition={{ duration: 1, delay: 1.4, ease: [0.76, 0, 0.24, 1] }}
            className="text-pure-white text-5xl sm:text-7xl md:text-[11rem] font-bold uppercase tracking-tighter leading-[0.85]"
          >
            Search First
            <br />
            <span className="text-white/40">Creative</span>
          </motion.h1>
        </div>
      </section>
    </>
  );
}

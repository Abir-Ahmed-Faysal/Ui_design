"use client";

import { motion } from "framer-motion";

interface TextSplitterProps {
  text: string;
  delay?: number;
  className?: string;
}

export function TextSplitter({ 
  text, 
  delay = 0, 
  className = "" 
}: TextSplitterProps) {
  const characters = text.split("");

  return (
    <span className={`inline-flex overflow-hidden ${className}`}>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: delay + i * 0.03,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

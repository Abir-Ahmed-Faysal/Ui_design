"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function splitTextToChars(text: string) {
  return [...text].map((char, index) => (
    <div
      key={`${char}-${index}`}
      className="char-wrap"
      aria-hidden="true"
      style={{ display: "inline-block", position: "relative" }}
    >
      <div
        className="char-inner"
        aria-hidden="true"
        style={{ display: "inline-block", position: "relative" }}
      >
        <div
          className="char-leaf"
          aria-hidden="true"
          style={{ display: "inline-block", position: "relative" }}
        >
          {char === " " ? "\u00A0" : char}
        </div>
      </div>
    </div>
  ));
}

export default function RiseAtSevenHero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    if (!section || !heading) return;

    const chars = Array.from(heading.querySelectorAll<HTMLElement>(".char-leaf"));

    const headingWidth = heading.offsetWidth;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let yStart = 150;
    let yEnd = 400;
    let charyStart = -60;

    if (window.innerWidth <= 1023) {
      yStart = 100;
      yEnd = 200;
      charyStart = -60;
    }

    gsap.set(heading, {
      y: yStart,
      x: headingWidth - windowWidth + windowWidth * 0.5,
    });

    const tween1 = gsap.to(heading, {
      x: () => -(headingWidth - window.innerWidth + 1000),
      y: yEnd,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "+=" + (headingWidth - windowWidth + windowHeight * 0.35),
        scrub: true,
      },
    });

    chars.forEach((char) => {
      gsap.set(char, {
        yPercent: charyStart,
        rotate: 10,
      });
    });

    const tween2 = gsap.to(chars, {
      yPercent: 0,
      rotate: 0,
      ease: "back.inOut(4)",
      stagger: 0.35,
      duration: 2.5,
      scrollTrigger: {
        trigger: section,
        start: "top 77%",
        end: "+=" + (headingWidth - windowWidth + 200),
        scrub: true,
      },
    });

    ScrollTrigger.refresh();

    return () => {
      tween1.scrollTrigger?.kill();
      tween2.scrollTrigger?.kill();
      tween1.kill();
      tween2.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full pb-12 xl:pb-24 bg-white overflow-x-hidden">
      <div className="w-full px-0">
        <div className="grid grid-cols-12 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">
          <div className="col-span-12 px-4 md:px-7">
            <div className="grid grid-cols-12 md:border-b md:border-gray-200 md:pb-5 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">
              <div className="col-span-11 md:col-span-9 flex items-end">
                <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-gray-900 text-6xl md:text-7xl lg:text-7xl 2xl:text-8xl font-medium tracking-tight">
                  What&apos;s New
                </h2>
              </div>

              <div className="col-span-12 md:col-span-3 md:items-center md:justify-end hidden md:flex">
                <a
                  href="#"
                  className="w-full group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight tracking-tight capitalize font-medium overflow-hidden border border-transparent cursor-pointer focus:outline-none md:w-auto text-base px-6 py-3 rounded-3xl transition bg-white text-gray-900 ring-gray-900/5 flex-row-reverse"
                >
                  <div className="relative overflow-hidden">
                    <div className="transition group-hover:-translate-y-6">
                      <div className="flex items-center gap-x-2">
                        <span>Explore More Thoughts</span>
                        <span className="inline-block align-middle text-xs mt-1" aria-hidden="true">
                          ↗
                        </span>
                      </div>
                    </div>
                    <div className="transition absolute top-0 left-0 translate-y-6 group-hover:translate-y-0">
                      <div className="flex items-center gap-x-2">
                        <span>Explore More Thoughts</span>
                        <span className="inline-block align-middle text-xs mt-1" aria-hidden="true">
                          ↗
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:px-7">
            <div className="overflow-hidden hidden lg:block">
              <div className="flex h-[35vh] lg:h-[100vh]">
                <div
                  ref={headingRef}
                  className="shrink-0 text-[30vw] font-medium tracking-tight leading-tight lg:text-[16vw] 4xl:text-[14vw] will-change-transform"
                  aria-label="Ready to Rise at Seven?"
                >
                  {splitTextToChars("Ready to Rise at Seven?")}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:hidden px-4 md:px-7">
            <a
              href="#"
              className="w-full group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight tracking-tight capitalize font-medium overflow-hidden border border-transparent cursor-pointer focus:outline-none md:w-auto text-base px-6 py-3 rounded-3xl transition bg-white text-gray-900 ring-gray-900/5 flex-row-reverse"
            >
              <div className="relative overflow-hidden">
                <div className="transition group-hover:-translate-y-6">
                  <div className="flex items-center gap-x-2">
                    <span>Explore More Thoughts</span>
                    <span className="inline-block align-middle text-xs mt-1" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </div>
                <div className="transition absolute top-0 left-0 translate-y-6 group-hover:translate-y-0">
                  <div className="flex items-center gap-x-2">
                    <span>Explore More Thoughts</span>
                    <span className="inline-block align-middle text-xs mt-1" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
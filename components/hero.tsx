"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const AWARDS = [
  "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/global-search-awards.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/Mask-group.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Awards/White/UKSocial-Media-Awards-White.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Awards/White/UK-Content-Awards-White.png?w=400&q=100&auto=format&fit=crop"
];

const PLATFORMS = [
  "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/gogle.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/chat-gpt.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/gemini.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/tiktok.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/youtube.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/pinterest.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/giphy.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/reddit.png?w=400&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/amazon.png?w=400&q=100&auto=format&fit=crop"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.2 // wait for loader
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  }
};

export function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Simulate loading time to show the Transition Loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
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
              animate={{ scale: 0.3, y: "-40vh", x: "-40vw", opacity: 0 }} 
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
              className="text-pure-white text-6xl md:text-9xl font-bold tracking-tighter whitespace-nowrap origin-center"
            >
              Rise at Seven
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section ref={containerRef} className="relative w-full min-h-screen flex flex-col items-center justify-center pt-48 pb-16 px-4 md:px-8 z-20 overflow-hidden bg-deep-black">
        {/* Layered Background Imagery */}
        <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none z-0">
          <motion.div style={{ y: y1 }} className="absolute top-[10%] left-[5%] w-64 h-80 opacity-20 rotate-[-6deg] overflow-hidden rounded-2xl hidden md:block">
            <Image src="https://rise-atseven.transforms.svdcdn.com/production/images/RedBull-Instagram-Post-45.png?w=800&q=80&auto=format&fit=crop" alt="Layered Art 1" fill className="object-cover" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute top-[30%] right-[5%] w-72 h-96 opacity-15 rotate-[8deg] overflow-hidden rounded-2xl hidden lg:block">
            <Image src="https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/gogle.png?w=800&q=80&auto=format&fit=crop" alt="Layered Art 2" fill className="object-cover grayscale" />
          </motion.div>
          <motion.div style={{ y: y3 }} className="absolute bottom-[-10%] left-[20%] w-[30rem] h-[20rem] opacity-10 rotate-[2deg] overflow-hidden rounded-3xl hidden xl:block">
            <Image src="https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/tiktok.png?w=800&q=80&auto=format&fit=crop" alt="Layered Art 3" fill className="object-cover grayscale" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-black/60 to-deep-black" />
        </motion.div>

        <motion.div 
          className="flex flex-col items-center w-full max-w-7xl mx-auto z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isLoading ? "hidden" : "visible"}
        >
          {/* Top Awards Section */}
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center mb-8 md:mb-12">
            <div className="uppercase text-[10px] md:text-xs font-medium leading-tight tracking-tight max-w-[200px] text-balance text-center mb-4 text-pure-white/90">
              #1 Most recommended content marketing agency
            </div>
            <div className="flex items-center gap-x-2 md:gap-x-4">
              <svg viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 md:w-6 fill-current text-pure-white">
                <path d="M25.826 36.2423C24.1628 35.2302 22.3284 34.9354 20.4357 34.7259C19.6852 34.6204 18.9236 34.4691 18.193 34.2705C17.3545 34.0474 16.5347 33.7576 15.7419 33.4062L16.4438 31.9431C17.2169 30.332 16.5375 28.3991 14.9263 27.6261L14.0759 29.3985C13.5361 30.5234 13.7046 31.805 14.4037 32.7394C13.3196 32.1373 12.3026 31.4146 11.3802 30.5845L12.6328 29.1752C13.8199 27.8396 13.6998 25.7945 12.364 24.6072L11.0579 26.0765C10.0602 27.199 9.98609 28.8225 10.7806 30.0168C10.6575 29.8939 10.5358 29.7692 10.4166 29.6422C9.49052 28.6654 8.6932 27.5814 8.02681 26.4223L9.41226 25.5441C10.9217 24.5875 11.3698 22.5885 10.4131 21.0791L8.75281 22.1315C7.7684 22.7554 7.23555 23.8229 7.24942 24.9087C6.7712 23.8595 6.39118 22.7641 6.11088 21.6429L7.61991 21.1998C9.33444 20.6962 10.3162 18.8982 9.81266 17.1835L7.92644 17.7374C6.85358 18.0523 6.06774 18.8744 5.75319 19.8655C5.57825 18.727 5.50281 17.5732 5.52904 16.4239L7.2633 16.4128C9.05024 16.4013 10.4897 14.9435 10.4782 13.1565L8.5124 13.1691C7.23035 13.1773 6.12736 13.93 5.61055 15.0146C5.73 13.7312 5.98818 12.4645 6.37211 11.2376L8.06062 11.7101C9.78144 12.1916 11.5669 11.1871 12.0486 9.46623L10.1554 8.93641C8.90673 8.58696 7.62424 9.02009 6.83038 9.94142C7.30904 8.72939 7.91213 7.56635 8.62664 6.47593L10.1355 7.40528C11.6568 8.34265 13.6501 7.86898 14.5873 6.3476L12.9135 5.31658C11.788 4.62331 10.4045 4.70222 9.38126 5.40589C9.87033 4.76053 10.4008 4.14639 10.9692 3.56888C11.3054 3.84679 11.7648 3.98423 12.2801 3.86023C12.6898 3.7616 13.1 3.57083 13.4724 3.24067C15.26 1.65751 15.26 0.0708753 15.26 0.0708753C13.0683 -0.225683 11.698 0.452629 10.855 1.28334C10.1931 1.93542 10.3013 2.86694 10.8194 3.42667C10.0988 4.13143 9.44456 4.88605 8.85752 5.68142C9.29 4.30204 8.75303 2.75334 7.46577 1.96057L5.792 0.929551C4.85463 2.45093 5.3283 4.44425 6.84968 5.3814L8.39642 6.33437C7.60321 7.51085 6.94961 8.76602 6.43887 10.0721C6.32463 8.76906 5.42108 7.61187 4.087 7.23857L2.19384 6.70876C1.71237 8.42958 2.71694 10.215 4.43776 10.6967L6.05409 11.1491C5.63353 12.4429 5.34824 13.7772 5.2004 15.1264C4.69182 13.9916 3.54916 13.2042 2.22571 13.2127L0.259922 13.2252C0.271412 15.0122 1.72927 16.4516 3.51621 16.4401L5.10068 16.4299C5.03933 17.8386 5.12691 19.2542 5.36667 20.6479C4.57671 19.6171 3.20665 19.1237 1.88601 19.5115L0 20.0652C0.503586 21.7797 2.30158 22.7615 4.01633 22.2579L5.59928 21.7931C5.90776 23.1092 6.35563 24.398 6.94419 25.6345C5.91621 24.9679 4.55222 24.917 3.44966 25.6157L1.78932 26.6681C2.74598 28.1776 4.74494 28.6257 6.25439 27.669L7.56983 26.8353C8.22039 27.9801 9.00038 29.0699 9.91151 30.0823C8.7617 29.767 7.48073 30.1015 6.63528 31.053L5.32916 32.5224C6.66476 33.7095 8.70989 33.5894 9.89721 32.2535L10.9189 31.1042C11.9553 32.0671 13.113 32.8948 14.3532 33.5737C13.0642 33.4781 11.7889 34.1658 11.196 35.4014L10.3455 37.1739C11.9566 37.9469 13.8895 37.2675 14.6625 35.6564L15.4065 34.1057C16.8386 34.7702 18.36 35.2451 19.9167 35.5122C20.2867 35.5738 20.73 35.6432 21.0908 35.6865C23.2018 35.9542 24.9211 36.55 26.5574 37.9224L27.162 37.1667C26.7397 36.8346 26.2964 36.5207 25.8264 36.2426L25.826 36.2423Z"></path>
              </svg>
              
              {AWARDS.map((src, i) => (
                <div key={i} className={`w-8 md:w-12 h-4 md:h-6 relative ${i === 3 ? 'hidden lg:block' : ''}`}>
                  <Image 
                    src={src} 
                    alt="Award Logo" 
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 32px, 48px"
                  />
                </div>
              ))}

              <svg viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 md:w-6 fill-current text-pure-white">
                <path d="M26.1158 19.5111C24.7952 19.1232 23.4251 19.6166 22.6352 20.6472C22.8747 19.2535 22.9627 17.8379 22.9011 16.4293L24.4854 16.4395C26.2723 16.451 27.7302 15.0115 27.7417 13.2246L25.7759 13.212C24.4527 13.2036 23.31 13.9907 22.8014 15.1256C22.6536 13.7763 22.3683 12.4422 21.9477 11.1485L23.5641 10.6963C25.2849 10.2148 26.2897 8.42914 25.808 6.70832L23.9148 7.23814C22.5807 7.61144 21.6772 8.76862 21.563 10.0717C21.0522 8.76559 20.3988 7.51042 19.6054 6.33416L21.1524 5.38118C22.6737 4.44381 23.1474 2.45071 22.21 0.929334L20.5363 1.96035C19.249 2.75334 18.712 4.30204 19.1447 5.68164C18.5577 4.88627 17.9034 4.13143 17.1826 3.42667C17.701 2.86715 17.8091 1.93542 17.1473 1.28334C16.304 0.452629 14.9337 -0.225683 12.7423 0.0708753C12.7423 0.0708753 12.7423 1.65751 14.5294 3.24067C14.9021 3.57083 15.312 3.7616 15.7217 3.86023C16.236 3.98402 16.6942 3.84723 17.0302 3.57083C17.5991 4.14834 18.1306 4.76183 18.621 5.40611C17.5976 4.70222 16.2138 4.62309 15.0883 5.31658L13.4145 6.3476C14.3519 7.86898 16.345 8.34265 17.8664 7.40528L19.3773 6.47441C19.4378 6.56633 19.4977 6.6589 19.5564 6.7519C20.2139 7.76709 20.7591 8.8458 21.1931 9.96678C20.401 9.0279 19.1064 8.58371 17.8464 8.93641L15.9533 9.46623C16.4347 11.187 18.2204 12.1918 19.9412 11.7101L21.6321 11.2369C22.0045 12.4557 22.2521 13.713 22.3759 14.9829C21.8528 13.9153 20.7589 13.1771 19.4894 13.1689L17.5236 13.1563C17.5122 14.9432 18.9516 16.4011 20.7385 16.4126L22.4635 16.4236C22.491 17.5726 22.4186 18.7241 22.2469 19.8597C21.931 18.8711 21.1461 18.0517 20.0754 17.7374L18.1892 17.1835C17.6856 18.898 18.6674 20.6962 20.3819 21.1998L21.8916 21.6431C21.6124 22.7678 21.2324 23.866 20.7522 24.9185C20.7693 23.8294 20.2362 22.7574 19.2488 22.1317L17.5885 21.0793C16.6318 22.5887 17.0799 24.5877 18.5893 25.5443L19.9778 26.4245C19.3121 27.5804 18.5143 28.6628 17.585 29.6426C17.4645 29.7716 17.342 29.8982 17.2173 30.0228C18.0157 28.8279 17.9429 27.2012 16.9435 26.077L15.6374 24.6076C14.3018 25.7947 14.1815 27.8401 15.3686 29.1757L16.6227 30.5865C15.7009 31.4168 14.684 32.1363 13.6001 32.7365C14.2973 31.8024 14.4648 30.5225 13.9255 29.3989L13.075 27.6265C11.4639 28.3996 10.7845 30.3324 11.5576 31.9435L12.2582 33.4038C10.8847 34.0125 9.42985 34.4402 7.94359 34.6704C7.57181 34.7259 7.17748 34.7808 6.79789 34.8215C4.50564 35.0815 2.65757 35.6999 0.839844 37.1671L1.44445 37.9228C1.83574 37.6055 2.23982 37.3104 2.66212 37.0518C3.94872 36.2469 5.39553 35.8909 6.91084 35.6867C8.89049 35.4606 10.8129 34.9293 12.5949 34.1053L13.3393 35.6568C14.1124 37.2679 16.0452 37.9473 17.6563 37.1743L16.8059 35.4019C16.2132 34.1666 14.9387 33.479 13.6502 33.574C14.886 32.8987 16.0406 32.074 17.0831 31.1046L18.1048 32.254C19.2919 33.5896 21.3373 33.7099 22.6729 32.5228L21.3668 31.0534C20.5211 30.102 19.2401 29.7675 18.0905 30.0827C19.0017 29.0701 19.7814 27.9805 20.432 26.8357L21.7474 27.6695C23.2569 28.6261 25.2558 28.178 26.2125 26.6686L24.5522 25.6161C23.4494 24.9172 22.0854 24.9681 21.0574 25.635C21.646 24.3984 22.0939 23.1097 22.4025 21.7934L23.9855 22.2581C25.7 22.7617 27.4982 21.7799 28.0018 20.0654L26.1156 19.5115L26.1158 19.5111Z"></path>
              </svg>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="text-center w-full flex flex-col items-center">
            <h1 className="inline-flex flex-wrap text-balance relative flex-col text-center justify-center text-pure-white text-[3.5rem] leading-[0.9] sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter">
              <div className="flex flex-wrap justify-center items-center gap-x-2 md:gap-x-4">
                <span>We</span>
                <span>Create</span>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-x-2 md:gap-x-4 mt-2">
                <span>Category</span>
                <motion.div 
                  className="inline-block relative overflow-hidden bg-white/10 rounded-[15%] w-[1.2em] h-[0.8em] shrink-0 mx-1 md:mx-2"
                  initial={{ scale: 0 }}
                  animate={isLoading ? { scale: 0 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1.5 }}
                >
                  <Image 
                    src="https://rise-atseven.transforms.svdcdn.com/production/images/RedBull-Instagram-Post-45.png?w=1890&h=2363&q=100&auto=format&fit=crop"
                    alt="Feature"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 48px, 160px"
                  />
                </motion.div>
                <span>Leaders</span>
              </div>
            </h1>
            
            <p className="mt-6 md:mt-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-pure-white/90">
              on every searchable platform
            </p>
          </motion.div>

          {/* Platform Logos */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 md:mt-24 w-full flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-14 opacity-80"
          >
            {PLATFORMS.map((src, i) => (
              <div key={i} className="w-14 sm:w-16 md:w-20 h-7 sm:h-8 md:h-10 relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  src={src} 
                  alt="Platform Logo" 
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 56px, 80px"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

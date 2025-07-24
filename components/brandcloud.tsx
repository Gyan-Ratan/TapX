"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export function LogosWithBlurFlip() {
  const [logos, setLogos] = useState([
    [
      {
        name: "Aceternity UI",
        src: "/images/media/bloomberg.svg",
      },
      {
        name: "Host it",
        src: "/images/media/forbes.svg",
      },
      {
        name: "Asteroid Kit",
        src: "/images/media/ft.svg",
      },
    ],
    [
      {
        name: "Aceternity UI 2",
        src: "/images/media/guardian.svg",
      },
      {
        name: "Host it 2",
        src: "/images/media/techcrunch.svg",
      },
      {
        name: "Asteroid Kit 2",
        src: "/images/media/wsj.svg",
      },
    ],
  ]);
  const [activeLogoSet, setActiveLogoSet] = useState(logos[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const flipLogos = () => {
    setLogos((currentLogos) => {
      const newLogos = [...currentLogos.slice(1), currentLogos[0]];
      setActiveLogoSet(newLogos[0]);
      setIsAnimating(true);
      return newLogos;
    });
  };

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        flipLogos();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="relative z-20 px-4 py-10 md:px-8 md:py-40">
      <h2 className="bg-gradient-to-b bg-clip-text text-center font-sans text-2xl font-bold text-transparent md:text-5xl from-white to-neutral-600">
        Featured in
      </h2>
      <p className="mt-4 text-center font-sans text-base text-neutral-300">
        Trusted by the best companies
      </p>
      <div className="relative mt-20 flex h-full w-full flex-wrap justify-center gap-10 md:gap-10">
        <AnimatePresence
          mode="popLayout"
          onExitComplete={() => {
            setIsAnimating(false);
          }}
        >
          {activeLogoSet.map((logo, idx) => (
            <motion.div
              initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -40, opacity: 0, filter: "blur(10px)" }}
              transition={{
                duration: 0.8,
                delay: 0.1 * idx,
                ease: [0.4, 0, 0.2, 1],
              }}
              key={logo.name + idx + "logo-flip"}
              className="relative"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width="100"
                height="100"
                className="h-10 w-20 object-contain filter md:h-20 md:w-40 invert"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

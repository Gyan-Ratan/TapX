"use client";

import { useState, useEffect } from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image from "next/image";

const highlights = [
  {
    logo: "/images/mc.svg",
    text: "Powered by Mastercard",
    alt: "Mastercard Logo"
  },
  {
    logo: "/images/visa.svg",
    text: "Powered by Visa",
    alt: "Visa Logo"
  },
  {
    logo: "/images/globe.png",
    text: "180+ Countries Support",
    alt: "Globe Icon"
  },
  {
    logo: "/images/clock.svg",
    text: "24*7 Support",
    alt: "24*7 Support"
  }
];

export function AnimatedHighlight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % highlights.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center">
      <HoverBorderGradient
        containerClassName="rounded-2xl group"
        className="flex items-center gap-3 py-2 px-4 bg-white/5 backdrop-blur-sm"
      >
        <div className="w-6 h-6 relative flex-shrink-0">
          <Image
            src={highlights[currentIndex].logo}
            alt={highlights[currentIndex].alt}
            fill
            className="object-contain"
          />
        </div>
        <span className="text-sm font-medium  text-gray-300">
          {highlights[currentIndex].text}
        </span>
      </HoverBorderGradient>
    </div>
  );
} 
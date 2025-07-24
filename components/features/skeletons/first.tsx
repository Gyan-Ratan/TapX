"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const TokenIcon = ({ number }: { number: number }) => {
  return (
    <div className="w-7 h-7 rounded-full bg-[rgba(40,40,40,0.8)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center overflow-hidden">
      <Image 
        src={`/images/token/${number}.svg`}
        alt={`Token ${number}`}
        width={20}
        height={20}
        className="object-contain"
      />
    </div>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="p-4 overflow-hidden h-full">
      <div className="flex flex-col gap-3 items-center justify-center h-full relative">
        {/* Animated paths - made smaller and adjusted for new container size */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="75"
          viewBox="0 0 42 75"
          fill="none"
          className="absolute left-1/2 -translate-x-[40px] -top-6 text-neutral-600"
        >
          <path
            d="M1 -49L1 37.5C1 44.1274 6.37258 49.5 13 49.5H29C35.6274 49.5 41 54.8726 41 61.5L41 75"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <motion.path
            d="M1 -49L1 37.5C1 44.1274 6.37258 49.5 13 49.5H29C35.6274 49.5 41 54.8726 41 61.5L41 75"
            stroke="url(#gradient-1)"
            strokeWidth="1.5"
          />
          <defs>
            <motion.linearGradient
              initial={{
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "0%",
              }}
              animate={{
                x1: "100%",
                y1: "90%",
                x2: "120%",
                y2: "120%",
              }}
              id="gradient-1"
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <stop stopColor="#001AFF" stopOpacity="0" />
              <stop offset="1" stopColor="#6DD4F5" />
              <stop offset="1" stopColor="#6DD4F5" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>

        {/* First row of tokens */}
        <div className="flex gap-2 items-center justify-center flex-shrink-0">
          <TokenIcon number={1} />
          <TokenIcon number={2} />
          <TokenIcon number={3} />
          <TokenIcon number={4} />
          <TokenIcon number={5} />
          <TokenIcon number={6} />
          <TokenIcon number={7} />
          <TokenIcon number={8} />
          <TokenIcon number={9} />
          <TokenIcon number={10} />
          <TokenIcon number={11} />
          <TokenIcon number={12} />
          <TokenIcon number={13} />
          <TokenIcon number={14} />
          <TokenIcon number={15} />
          <TokenIcon number={16} />
          <TokenIcon number={17} />
        </div>

        {/* Second row of tokens */}
        <div className="flex gap-2 items-center justify-center flex-shrink-0 ml-4">
        <TokenIcon number={18} />
        <TokenIcon number={19} />
        <TokenIcon number={20} />
        <TokenIcon number={21} />
        <TokenIcon number={22} />
        <TokenIcon number={23} />
        <TokenIcon number={24} />
        <TokenIcon number={25} />
        <TokenIcon number={26} />
        <TokenIcon number={27} />
        <TokenIcon number={28} />
        <TokenIcon number={29} />
        <TokenIcon number={30} />
        <TokenIcon number={31} />
        <TokenIcon number={32} />
        <TokenIcon number={33} />
        <TokenIcon number={34} />
        <TokenIcon number={35} />
        <TokenIcon number={36} />
        <TokenIcon number={37} />
        </div>

        {/* Animated bottom path - made smaller */}
        <svg
          width="88"
          height="49"
          viewBox="0 0 88 49"
          fill="none"
          className="absolute left-1/2 translate-x-2 -bottom-2 text-neutral-600"
        >
          <path
            d="M1 0.5L1 19.5862C1 26.2136 6.37259 31.5862 13 31.5862H75C81.6274 31.5862 87 36.9588 87 43.5862L87 55"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <motion.path
            d="M1 0.5L1 19.5862C1 26.2136 6.37259 31.5862 13 31.5862H75C81.6274 31.5862 87 36.9588 87 43.5862L87 55"
            stroke="url(#gradient-2)"
            strokeWidth="1.5"
          />
          <defs>
            <motion.linearGradient
              initial={{
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "0%",
              }}
              animate={{
                x1: "100%",
                y1: "90%",
                x2: "120%",
                y2: "120%",
              }}
              id="gradient-2"
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <stop stopColor="#001AFF" stopOpacity="0" />
              <stop offset="1" stopColor="#6DD4F5" />
              <stop offset="1" stopColor="#6DD4F5" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

"use client";
import { motion } from "framer-motion";
import React from "react";

export const SkeletonSix = () => {
  return (
    <div className="p-4 overflow-hidden h-full">
      <div className="flex flex-col gap-4 items-center justify-center h-full relative">
        {/* 24/7 Service Icon */}
        <div className="relative">
          {/* Main circle background */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center">
            {/* Clock icon */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-cyan-400"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M12 6V12L16 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          
          {/* Animated pulse ring */}
          <motion.div
            className="absolute inset-0 w-16 h-16 rounded-full border-2 border-cyan-400/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Second pulse ring */}
          <motion.div
            className="absolute inset-0 w-16 h-16 rounded-full border border-cyan-400/20"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>

        {/* 24/7 Text indicator */}
        <div className="flex items-center gap-2 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-cyan-400">24/7</span>
        </div>

        {/* Subtle background dots */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="grid grid-cols-3 gap-4">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-cyan-400 rounded-full"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 
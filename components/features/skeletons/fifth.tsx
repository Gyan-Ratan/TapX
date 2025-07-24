"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaShieldAlt, FaLock, FaCheckCircle } from "react-icons/fa";

export const SkeletonFive = () => {
  return (
    <div className="p-6 overflow-hidden h-full relative flex items-center justify-center">
      {/* Multiple rotating circles in background for depth */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute h-32 w-32 rounded-full border-2 border-[rgba(57,195,239,0.03)]"
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute h-36 w-36 rounded-full border border-[rgba(57,195,239,0.02)]"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute h-40 w-40 rounded-full border border-[rgba(57,195,239,0.01)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center">
        {/* Shield with lock */}
        <motion.div
          className="relative"
          animate={{ 
            y: [-2, 2, -2],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
        >
          <div className="relative h-20 w-20 flex items-center justify-center">
            {/* Glowing background effect */}
            <motion.div
              className="absolute inset-0 bg-[#39C3EF] rounded-2xl blur-2xl"
              animate={{ opacity: [0.03, 0.05, 0.03] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Shield background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(40,40,40,0.9)] to-[rgba(40,40,40,0.4)] rounded-2xl transform rotate-45 backdrop-blur-sm border border-[rgba(57,195,239,0.1)]" />
            
            {/* Shield icon */}
            <FaShieldAlt className="relative h-8 w-8 text-[#39C3EF] transform -rotate-45" />
            
            {/* Lock overlay with pulse */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center transform -rotate-45"
              animate={{ 
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaLock className="h-4 w-4 text-[#39C3EF]" />
            </motion.div>
          </div>
        </motion.div>

        {/* Multiple scanning effects for layered look */}
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(57,195,239,0.05)] to-transparent"
            animate={{
              y: ["-100%", "100%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
          />
        ))}

        {/* Security indicators */}
        <div className="mt-8 flex flex-col gap-2">
          {["Encrypted", "Protected", "Verified"].map((text, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: i * 0.15,
                ease: "easeOut"
              }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              >
                <FaCheckCircle className="h-3 w-3 text-[#39C3EF]" />
              </motion.div>
              <span className="text-xs text-neutral-400">{text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

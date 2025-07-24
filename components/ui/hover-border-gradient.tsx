"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const HoverBorderGradient = ({
  children,
  className,
  containerClassName,
  as: Component = "div",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: any;
}) => {
  return (
    <div className={cn("relative rounded-xl p-[1px]", containerClassName)}>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <Component
        className={cn(
          "relative rounded-xl bg-white dark:bg-black px-4 py-2 transition-all duration-300 group-hover:scale-105",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    </div>
  );
}; 
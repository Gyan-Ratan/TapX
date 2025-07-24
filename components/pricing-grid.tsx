"use client";
import React, { useState } from "react";
import { Container } from "./container";
import { motion, AnimatePresence } from "framer-motion";
import { Switch } from "./switch";
import { Button } from "./button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CardContent {
  title: string;
  description: string;
  image: string;
  buttons: {
    text: string;
    href: string;
  }[];
}

const cardContents: Record<"virtual" | "physical", CardContent> = {
  virtual: {
    title: "Get new virtual card INSTANTLY!",
    description: "You can give access to multiple cards for your whole team and control spending for each employee and ad campaign. No personal verification needed, and you can add unlimited users.",
    image: "/images/card-black_2.png",
    buttons: [
      { text: "Telegram", href: "https://t.me/TapXcard_bot" },
      { text: "Web App", href: "https://app.tapxcard.io/" }
    ]
  },
  physical: {
    title: "Get premium physical card",
    description: "Premium cards with contactless payments, perfect for business expenses and team purchases. Enhanced security features with worldwide acceptance.",
    image: "/images/card-white.png",
    buttons: [
        { text: "Coming Soon", href: "https://app.tapxcard.io/" },
    ]
  }
};

export const PricingGrid = () => {
  const [isPhysical, setIsPhysical] = useState(false);
  const currentContent = isPhysical ? cardContents.physical : cardContents.virtual;

  return (
    <Container className="relative">
      <div className="flex justify-center mb-16">
        <div className="flex items-center gap-3 text-sm">
          <span className={cn("transition-colors", !isPhysical && "text-cyan-500")}>VIRTUAL</span>
          <Switch checked={isPhysical} setChecked={setIsPhysical} />
          <span className={cn("transition-colors", isPhysical && "text-cyan-500")}>PHYSICAL</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <motion.h2
            key={currentContent.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-semibold tracking-tight"
          >
            {currentContent.title}
          </motion.h2>
          
          <motion.p
            key={currentContent.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-neutral-400 leading-relaxed"
          >
            {currentContent.description}
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {currentContent.buttons.map((button, index) => (
              <Button
                key={button.text}
                variant={index === 0 ? "primary" : "muted"}
                href={button.href}
              >
                {button.text}
              </Button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-[400px] w-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentContent.image}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full"
            >
              <Image
                src={currentContent.image}
                alt={`${isPhysical ? 'Physical' : 'Virtual'} Card`}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </Container>
  );
};

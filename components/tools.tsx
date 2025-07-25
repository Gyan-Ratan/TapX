"use client";
import { motion, useMotionValueEvent } from "framer-motion";
import React, { useRef, useState } from "react";
import { FeatureIconContainer } from "./features/feature-icon-container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { StickyScroll } from "./ui/sticky-scroll";
import {
  IconCreditCard,
  IconUserPlus,
  IconGift,
} from "@tabler/icons-react";
import { useScroll } from "framer-motion";
import { BlurImage } from "./blur-image";

export const Tools = () => {
  const content = [
    {
      icon: <IconCreditCard className="h-8 w-8 text-secondary" />,
      title: "Virtual Cards on the GO!",
      description:
        "Create as many cards as you need for your ad accounts. Set individual limits and pause any card anytime.",
      content: (
        <ImageContainer>
          <BlurImage
            src="/images/tools/1.gif"
            alt="dashboard"
            height="1000"
            width="1000"
            className="w-full rounded-lg shadow-xl shadow-brand/[0.2]"
          />
        </ImageContainer>
      ),
    },
    {
      icon: <IconUserPlus className="h-8 w-8 text-secondary" />,
      title: "Refer and Earn",
      description:
        "You can give access to multiple cards for your whole team and control spending for each employee and ad campaign. No personal verification needed, and you can add unlimited users.",
      content: (
        <ImageContainer>
          <BlurImage
            src="/images/tools/2.png"
            alt="dashboard"
            height="1000"
            width="1000"
            className="w-full rounded-lg shadow-xl shadow-brand/[0.2]"
          />
        </ImageContainer>
      ),
    },
    {
      icon: <IconGift className="h-8 w-8 text-secondary" />,
      title: "Ultimate Package",
      description:
        "TapxCard Offers not just freedom, but Dominant savings as Cashbacks, ",
      content: (
        <ImageContainer>
          <BlurImage
            src="/images/tools/3.gif"
            alt="dashboard"
            height="1000"
            width="1000"
            className="w-full rounded-lg shadow-xl shadow-brand/[0.2]"
          />
        </ImageContainer>
      ),
    },
    // {
    //   icon: <IconTerminal className="h-8 w-8 text-secondary" />,
    //   title: "Apps Automation",
    //   description:
    //     "We have cloned zapier and built our very own apps automation platform.",
    //   content: (
    //     <ImageContainer>
    //       <BlurImage
    //         src="/third.png"
    //         alt="dashboard"
    //         height="1000"
    //         width="1000"
    //         className="w-full rounded-lg shadow-xl shadow-brand/[0.2]"
    //       />
    //     </ImageContainer>
    //   ),
    // },
  ];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgrounds = [
    "var(--charcoal)",
    "var(--neutral-900)",
    "var(--gray-900)",
  ];
  const index = Math.round(scrollYProgress.get() * (backgrounds.length - 1));

  const [gradient, setGradient] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / content.length);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setGradient(backgrounds[closestBreakpointIndex % backgrounds.length]);
  });
  return (
    <motion.div
      animate={{
        background: gradient,
      }}
      transition={{
        duration: 0.5,
      }}
      ref={ref}
      className="w-full relative h-full md:pt-20"
    >
      <div className="px-6">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <IconCreditCard className="h-6 w-6 text-cyan-500" />
        </FeatureIconContainer>
        <Heading className="mt-4"><span
            className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent"
            style={{ WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >Perfect</span> Card</Heading>
        <Subheading>
        Tapxcard is perfect for all your daily needs.
        </Subheading>
      </div>
      <StickyScroll content={content} />
    </motion.div>
  );
};

const ImageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg relative shadow-2xl max-w-2xl mx-auto">
      {children}
      <div className="absolute bottom-0 w-full h-px inset-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <div className="absolute bottom-0 w-40 mx-auto h-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </div>
  );
};

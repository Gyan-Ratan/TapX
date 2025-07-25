"use client";
import React, { useRef, useState, useEffect } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import { HiArrowRight } from "react-icons/hi2";
import Image from "next/image";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { VideoModal } from "./video-modal";
import { FeaturedImages } from "./featured-images";
import Beam from "./beam";
import Lottie from "lottie-react";
import { AnimatedHighlight } from "./animated-highlight";

// Mobile Card Component with Floating Images and Glow
const MobileCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl scale-110" />
      
      {/* Floating Images */}
      <motion.div
        className="absolute -top-8 -left-5 w-16 h-16 z-10"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/m_floating.svg"
          alt="Floating token"
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.div
        className="absolute -top-4 -right-3 w-12 h-12 z-10"
        animate={{
          y: [0, 8, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Image
          src="/images/m_floating2.svg"
          alt="Floating token"
          width={48}
          height={48}
          className="w-full h-full object-contain"
          
        />
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -left-4 w-14 h-14 z-10"
        animate={{
          y: [0, -6, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Image
          src="/images/m_floating3.svg"
          alt="Floating token"
          width={56}
          height={56}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.div
        className="absolute -bottom-2 -right-4 w-12 h-12 z-10"
        animate={{
          y: [0, 8, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <Image
          src="/images/m_floating4.svg"
          alt="Floating token"
          width={40}
          height={40}
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Simple Card Image */}
      <div className="relative z-9">
        {children}
      </div>
    </div>
  );
};

export const Hero = () => {
  const router = useRouter();

  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [animationData, setAnimationData] = useState<any>(null);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Load Lottie animation data
  useEffect(() => {
    fetch("/lottifiles/hero.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading Lottie animation:", error));
  }, []);

  // Check if the card is in view to trigger Lottie animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed) {
          setIsInView(true);
          setHasPlayed(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasPlayed]);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1.2];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  return (
    <div
      ref={containerRef}
      className="flex flex-col min-h-full md:min-h-[90rem] pt-20 md:pt-40 relative overflow-hidden"
    >
      <Container className="flex flex-col items-center justify-center">
        <Heading
          as="h1"
          className="text-4xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10 py-6"
        >
          Transform Your Payments
        </Heading>
        <Subheading className="text-center mt-2 md:mt-6 text-base md:text-xl text-muted-dark max-w-3xl mx-auto relative z-10">
          Spend Everywhere Limitless with just Tap
          Our All-in-One Payment Solution
        </Subheading>
        
        <div className="md:mt-10 mt-4">
          <AnimatedHighlight />
        </div>

        <div className="flex items-center gap-4 justify-center my-20 relative z-10">
          <Button className="flex space-x-2 items-center group !text-lg">
            <span>Get Started</span>{" "}
            <HiArrowRight className="text-black group-hover:translate-x-1 stroke-[1px] h-3 w-3 mt-0.5 transition-transform duration-200" />
          </Button>
        </div>
      </Container>

      {/* Mobile Layout */}
      <div className="block md:hidden items-center justify-center relative p-4 cursor-pointer">
        <MobileCard>
          <Image
            src="/images/hero_m_card.svg"
            alt="Payment Card"
            width={400}
            height={256}
            className="w-full h-full object-cover rounded-xl"
          />
        </MobileCard>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-center relative p-20 cursor-pointer -mt-20">
        <div
          className="w-full relative"
          style={{
            perspective: "1000px",
          }}
        >
          <Card rotate={rotate} translate={translate} scale={scale}>
            {isInView && animationData && (
              <Lottie
                animationData={animationData}
                loop={false}
                autoplay={true}
                style={{ width: "100%", height: "100%" }}
                className="mx-auto rounded-md object-cover object-center h-full w-full"
              />
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        translateY: translate,
        // scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-6xl z-40 group -mt-12 mx-auto isolate group h-[20rem] md:h-[50rem] w-full border-4 border-neutral-900 p-2 md:p-2 bg-charcoal rounded-[30px] shadow-2xl relative"
    >
      <Beam showBeam className="-top-1 block" />
      <div className="absolute h-40 w-full bottom-0 md:-bottom-10 inset-x-0 scale-[1.2] z-20 pointer-events-none bg-charcoal [mask-image:linear-gradient(to_top,white_30%,transparent)]" />
      <div className="absolute inset-0 z-20  bg-transparent group-hover:bg-black/0 transition-all duration-200 flex items-center justify-center">
        {/* <VideoModal /> */}
      </div>
      <div className=" h-full w-full  overflow-hidden rounded-2xl bg-transparent md:rounded-2xl md:p-4 ">
        {children}
      </div>
    </motion.div>
  );
};

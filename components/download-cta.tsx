"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function DownloadCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 " />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 =text-gray-100 sm:text-4xl"
          >
            Download Our App
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-gray-600 =text-gray-400"
          >
            Get the full power of Proactiv in your pocket. Available for iOS and Android devices.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <HoverBorderGradient
            containerClassName="rounded-xl w-48 sm:w-auto"
            className="p-0 bg-transparent hover:bg-transparent"
          >
            <Image
              src="/images/app-store-badge.png"
              alt="Download on the App Store"
              width={200}
              height={60}
              className="h-[45px] w-auto"
            />
          </HoverBorderGradient>

          <HoverBorderGradient
            containerClassName="rounded-xl w-48 sm:w-auto"
            className="p-0 bg-transparent hover:bg-transparent"
          >
            <Image
              src="/images/google-play-badge.png"
              alt="Get it on Google Play"
              width={200}
              height={60}
              className="h-[45px] w-auto"
            />
          </HoverBorderGradient>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl" aria-hidden="true">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#39C3EF] to-[#08090A] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </section>
  );
} 
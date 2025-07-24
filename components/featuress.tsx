"use client";

import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconChevronDown,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";

export function FeaturesSectionDemo() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint in Tailwind
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const features = [
    {
      title: "Military-Grade Encryption",
      description:
        "Your data is protected with AES-256 encryption, the same standard used by financial institutions worldwide.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Secure Platform",
      description:
        "Your assets are fully insured against potential risks. We guarantee complete protection and refunds in the unlikely event of a security incident.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Smart Application",
      description:
        "Manage your crypto assets effortlessly with our comprehensive suite of tools and features, all at your fingertips..",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Global Payments",
      description: "Make purchases worldwide with cryptocurrency - no conversion to fiat currency needed. Simple, secure, and borderless.",
      icon: <IconCloud />,
    },
    {
      title: "Fraud Protection",
      description: "Advanced fraud detection and prevention systems with 24/7 monitoring and instant alerts for suspicious activity.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Secure Cards",
      description:
        "Pay with crypto using our virtual or physical cards. Advanced security features protect every transaction while earning cashback rewards.",
      icon: <IconHelp />,
    },
  ];

  // Show all features on desktop, or if showAll is true on mobile
  const visibleFeatures = (!isMobile || showAll) ? features : features.slice(0, 3);

  return (
    <div className="relative z-10 py-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleFeatures.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} totalFeatures={visibleFeatures.length} />
        ))}
      </div>
      
      {/* Show More Button - Only visible on mobile when there are hidden features */}
      {isMobile && !showAll && features.length > 3 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full  bg-neutral-800 text-neutral-100  hover:bg-neutral-700 transition-colors duration-200"
          >
            Show More
            <IconChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  totalFeatures,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  totalFeatures: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col relative group/feature border-neutral-800 p-6",
        "hover:bg-neutral-800/50 rounded-xl transition-colors duration-200"
      )}
    >
      <div className="mb-4 relative z-10 text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center -ml-6" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 relative z-10">
        {description}
      </p>
    </div>
  );
};

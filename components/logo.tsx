import Image from "next/image";
import { Link } from "next-view-transitions";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <Image
        src="/images/icons/logo-white.svg"
        alt="Proactiv Logo"
        width={107}
        height={107}
        className="h-15 w-15"
        priority
      />

      {/* <span className="text-white font-bold">Proactiv</span> */}
    </Link>
  );
};

"use client";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";
import { motion } from "framer-motion";

const navItems = [
  {
    title: "Features",
    link: "#Features",
  },
  {
    title: "Security",
    link: "#security",
  },
];

export function NavBar() {
  return (
    <motion.nav
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        ease: [0.6, 0.05, 0.1, 0.9],
        duration: 0.8,
      }}
      className="max-w-full  fixed top-0  mx-auto inset-x-0 z-50 w-full lg:w-full"
    >
      <div className="hidden lg:block w-full">
        <DesktopNavbar navItems={navItems} />
      </div>
      <div className="flex h-full w-full items-center lg:hidden ">
        <MobileNavbar navItems={navItems} />
      </div>
    </motion.nav>
  );
}

{
  /* <div className="hidden md:block ">
        <DesktopNavbar />
      </div>
      <div className="flex h-full w-full items-center md:hidden ">
        <MobileNavbar navItems={navItems} />
      </div> */
}

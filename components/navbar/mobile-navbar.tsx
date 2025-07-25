"use client";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { Button } from "@/components/button";
import { Logo } from "@/components/logo";
import { useMotionValueEvent, useScroll } from "framer-motion";

export const MobileNavbar = ({ navItems }: any) => {
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();

  const [showBackground, setShowBackground] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  });

  return (
    <div
      className={cn(
        "flex justify-between bg-transparent items-center w-full rounded-md px-2.5 py-1.5 transition duration-200",
        showBackground &&
          " bg-neutral-900  shadow-[0px_-2px_0px_0px_var(--neutral-800),0px_2px_0px_0px_var(--neutral-800)]"
      )}
    >
      <Logo />
      <IoIosMenu
        className="text-white h-6 w-6"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="absolute top-full right-0  w-full bg-black/10 backdrop-blur-md border border-white/20 shadow-2xl z-50 p-4">
          <div className="flex items-center justify-between w-full mb-4">
            {/* <span className="text-white text-sm font-medium">Menu</span>
            <IoIosClose
              className="h-5 w-5 text-white cursor-pointer hover:text-gray-300 transition-colors"
              onClick={() => setOpen(false)}
            /> */}
          </div>
          <div className="flex flex-col gap-3">
            {navItems.map((navItem: any, idx: number) => (
              <>
                {navItem.children && navItem.children.length > 0 ? (
                  <>
                    {navItem.children.map((childNavItem: any, idx: number) => (
                      <Link
                        key={`link=${idx}`}
                        href={childNavItem.link}
                        onClick={() => setOpen(false)}
                        className="text-white hover:text-gray-300 transition-colors text-sm py-2 px-3 rounded-lg hover:bg-white/10"
                      >
                        {childNavItem.title}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    key={`link=${idx}`}
                    href={navItem.link}
                    onClick={() => setOpen(false)}
                    className="text-white hover:text-gray-300 transition-colors text-sm py-2 px-3 rounded-lg hover:bg-white/10"
                  >
                    {navItem.title}
                  </Link>
                )}
              </>
            ))}
          </div>
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/20">
            <Button className="w-full text-sm py-2">Get Started</Button>
            <Button
              variant="simple"
              as={Link}
              href="https://app.tapxcard.io/home"
              onClick={() => {
                setOpen(false);
              }}
              className="w-full text-sm py-2"
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

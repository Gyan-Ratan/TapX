import Link from "next/link";
import React from "react";
import { Logo } from "@/components/logo";
import { 
  FaTwitter, 
  FaFacebookF, 
  FaInstagram, 
  FaTelegram,
  FaGithub,
  FaLinkedinIn
} from 'react-icons/fa';

export const Footer = () => {
  const links = [
    {
      name: "Pricing",
      href: "/",
    },
    {
      name: "Blog",
      href: "/",
    },
    {
      name: "Contact",
      href: "/",
    },
  ];
  const legal = [
    {
      name: "Privacy Policy",
      href: "#",
    },
    {
      name: "Terms of Service",
      href: "#",
    },
    {
      name: "Refund Policy",
      href: "#",
    },
  ];
  const socials = [
    {
      name: "Twitter",
      href: "#",
      icon: FaTwitter
    },
    {
      name: "Facebook",
      href: "#",
      icon: FaFacebookF
    },
    {
      name: "Instagram",
      href: "#",
      icon: FaInstagram
    },
    {
      name: "Telegram",
      href: "#",
      icon: FaTelegram
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: FaLinkedinIn
    },
    {
      name: "GitHub",
      href: "#",
      icon: FaGithub
    },
  ];

  return (
    <div className="relative">
      <div className="border-t border-neutral-900 px-8 pt-16 pb-24 relative bg-primary">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="text-sm text-neutral-500 dark:text-neutral-400 flex sm:flex-row flex-col justify-between items-start">
            <div>
              <div className="mr-4 md:flex mb-6">
                <Logo />
              </div>
              <div className="space-y-2">
                <div>Copyright &copy; {new Date().getFullYear()} Proactiv INC</div>
                <div>All rights reserved</div>
              </div>
              
              {/* Social Media Icons */}
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-4">Connect With Us</h3>
                <div className="flex flex-wrap gap-4">
                  {socials.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="text-neutral-500 hover:text-[#39C3EF] transition-colors p-2 hover:bg-neutral-900/50 rounded-full"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
              <div className="flex justify-center space-y-4 flex-col mt-4">
                <h3 className="text-sm font-medium mb-2">Quick Links</h3>
                {links.map((link) => (
                  <Link
                    key={link.name}
                    className="transition-colors hover:text-[#39C3EF] text-muted dark:text-muted-dark text-xs sm:text-sm"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="flex justify-center space-y-4 flex-col mt-4">
                <h3 className="text-sm font-medium mb-2">Legal</h3>
                {legal.map((link) => (
                  <Link
                    key={link.name}
                    className="transition-colors hover:text-[#39C3EF] text-muted dark:text-muted-dark text-xs sm:text-sm"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="flex justify-center space-y-4 flex-col mt-4">
                <h3 className="text-sm font-medium mb-2">Resources</h3>
                <Link href="/blog" className="transition-colors hover:text-[#39C3EF] text-muted dark:text-muted-dark text-xs sm:text-sm">
                  Blog
                </Link>
                <Link href="#" className="transition-colors hover:text-[#39C3EF] text-muted dark:text-muted-dark text-xs sm:text-sm">
                  Documentation
                </Link>
                <Link href="#" className="transition-colors hover:text-[#39C3EF] text-muted dark:text-muted-dark text-xs sm:text-sm">
                  Help Center
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

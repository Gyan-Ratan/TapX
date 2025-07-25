"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const logos = [
  {
    name: "United States",
    src: "https://flagcdn.com/us.svg",
  },
  {
    name: "United Kingdom",
    src: "https://flagcdn.com/gb.svg",
  },
  {
    name: "Canada",
    src: "https://flagcdn.com/ca.svg",
  },
  {
    name: "Germany",
    src: "https://flagcdn.com/de.svg",
  },
  {
    name: "France",
    src: "https://flagcdn.com/fr.svg",
  },
  {
    name: "Japan",
    src: "https://flagcdn.com/jp.svg",
  },
  {
    name: "Australia",
    src: "https://flagcdn.com/au.svg",
  },
  {
    name: "Netherlands",
    src: "https://flagcdn.com/nl.svg",
  },
  {
    name: "Switzerland",
    src: "https://flagcdn.com/ch.svg",
  },
  {
    name: "Sweden",
    src: "https://flagcdn.com/se.svg",
  },
  {
    name: "Norway",
    src: "https://flagcdn.com/no.svg",
  },
  {
    name: "Denmark",
    src: "https://flagcdn.com/dk.svg",
  },
  {
    name: "Finland",
    src: "https://flagcdn.com/fi.svg",
  },
  {
    name: "Italy",
    src: "https://flagcdn.com/it.svg",
  },
  {
    name: "Spain",
    src: "https://flagcdn.com/es.svg",
  },
  {
    name: "Portugal",
    src: "https://flagcdn.com/pt.svg",
  },
  {
    name: "Belgium",
    src: "https://flagcdn.com/be.svg",
  },
  {
    name: "Austria",
    src: "https://flagcdn.com/at.svg",
  },
  {
    name: "Ireland",
    src: "https://flagcdn.com/ie.svg",
  },
  {
    name: "New Zealand",
    src: "https://flagcdn.com/nz.svg",
  },
  {
    name: "Singapore",
    src: "https://flagcdn.com/sg.svg",
  },
  {
    name: "South Korea",
    src: "https://flagcdn.com/kr.svg",
  },
  {
    name: "Brazil",
    src: "https://flagcdn.com/br.svg",
  },
  {
    name: "Mexico",
    src: "https://flagcdn.com/mx.svg",
  },
  {
    name: "Argentina",
    src: "https://flagcdn.com/ar.svg",
  },
  {
    name: "Chile",
    src: "https://flagcdn.com/cl.svg",
  },
  {
    name: "India",
    src: "https://flagcdn.com/in.svg",
  },
  {
    name: "South Africa",
    src: "https://flagcdn.com/za.svg",
  },
  {
    name: "UAE",
    src: "https://flagcdn.com/ae.svg",
  },
  {
    name: "Israel",
    src: "https://flagcdn.com/il.svg",
  },
  {
    name: "Turkey",
    src: "https://flagcdn.com/tr.svg",
  },
  {
    name: "Poland",
    src: "https://flagcdn.com/pl.svg",
  },
  {
    name: "Czech Republic",
    src: "https://flagcdn.com/cz.svg",
  },
  {
    name: "Hungary",
    src: "https://flagcdn.com/hu.svg",
  },
  {
    name: "Greece",
    src: "https://flagcdn.com/gr.svg",
  },
  {
    name: "Russia",
    src: "https://flagcdn.com/ru.svg",
  },
  {
    name: "Ukraine",
    src: "https://flagcdn.com/ua.svg",
  },
  {
    name: "Kazakhstan",
    src: "https://flagcdn.com/kz.svg",
  },
  {
    name: "Philippines",
    src: "https://flagcdn.com/ph.svg",
  },
  {
    name: "Thailand",
    src: "https://flagcdn.com/th.svg",
  },
  {
    name: "Vietnam",
    src: "https://flagcdn.com/vn.svg",
  },
  {
    name: "Indonesia",
    src: "https://flagcdn.com/id.svg",
  },
  {
    name: "Malaysia",
    src: "https://flagcdn.com/my.svg",
  },
  {
    name: "Singapore",
    src: "https://flagcdn.com/sg.svg",
  },
  {
    name: "Philippines",
    src: "https://flagcdn.com/ph.svg",
  },
];

export const SkeletonSeven = () => {
  return (
    <div className="p-4 overflow-hidden h-full">
      <div className="flex flex-col gap-6 items-center justify-center h-full">
        {/* First row - moving left */}
        <div className="w-full">
          <Marquee speed={30} direction="left" gradient={false}>
            {logos.slice(0, 16).map((logo, index) => (
              <div
                key={index}
                className="mx-2 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={32}
                  height={24}
                  className="w-8 h-6 object-contain rounded-sm shadow-sm"
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Second row - moving right */}
        <div className="w-full">
          <Marquee speed={25} direction="right" gradient={false}>
            {logos.slice(13, 26).map((logo, index) => (
              <div
                key={index}
                className="mx-2 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={32}
                  height={24}
                  className="w-8 h-6 object-contain rounded-sm shadow-sm"
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Third row - moving left */}
        <div className="w-full">
          <Marquee speed={35} direction="left" gradient={false}>
            {logos.slice(23, 36).map((logo, index) => (
              <div
                key={index}
                className="mx-2 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={32}
                  height={24}
                  className="w-8 h-6 object-contain rounded-sm shadow-sm"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}; 
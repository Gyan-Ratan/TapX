"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const logos = [
  {
    name: "United States",
    src: "https://flagcdn.com/w40/us.png",
  },
  {
    name: "United Kingdom",
    src: "https://flagcdn.com/w40/gb.png",
  },
  {
    name: "Canada",
    src: "https://flagcdn.com/w40/ca.png",
  },
  {
    name: "Germany",
    src: "https://flagcdn.com/w40/de.png",
  },
  {
    name: "France",
    src: "https://flagcdn.com/w40/fr.png",
  },
  {
    name: "Japan",
    src: "https://flagcdn.com/w40/jp.png",
  },
  {
    name: "Australia",
    src: "https://flagcdn.com/w40/au.png",
  },
  {
    name: "Netherlands",
    src: "https://flagcdn.com/w40/nl.png",
  },
  {
    name: "Switzerland",
    src: "https://flagcdn.com/w40/ch.png",
  },
  {
    name: "Sweden",
    src: "https://flagcdn.com/w40/se.png",
  },
  {
    name: "Norway",
    src: "https://flagcdn.com/w40/no.png",
  },
  {
    name: "Denmark",
    src: "https://flagcdn.com/w40/dk.png",
  },
  {
    name: "Finland",
    src: "https://flagcdn.com/w40/fi.png",
  },
  {
    name: "Italy",
    src: "https://flagcdn.com/w40/it.png",
  },
  {
    name: "Spain",
    src: "https://flagcdn.com/w40/es.png",
  },
  {
    name: "Portugal",
    src: "https://flagcdn.com/w40/pt.png",
  },
  {
    name: "Belgium",
    src: "https://flagcdn.com/w40/be.png",
  },
  {
    name: "Austria",
    src: "https://flagcdn.com/w40/at.png",
  },
  {
    name: "Ireland",
    src: "https://flagcdn.com/w40/ie.png",
  },
  {
    name: "New Zealand",
    src: "https://flagcdn.com/w40/nz.png",
  },
  {
    name: "Singapore",
    src: "https://flagcdn.com/w40/sg.png",
  },
  {
    name: "South Korea",
    src: "https://flagcdn.com/w40/kr.png",
  },
  {
    name: "Brazil",
    src: "https://flagcdn.com/w40/br.png",
  },
  {
    name: "Mexico",
    src: "https://flagcdn.com/w40/mx.png",
  },
  {
    name: "Argentina",
    src: "https://flagcdn.com/w40/ar.png",
  },
  {
    name: "Chile",
    src: "https://flagcdn.com/w40/cl.png",
  },
  {
    name: "India",
    src: "https://flagcdn.com/w40/in.png",
  },
  {
    name: "South Africa",
    src: "https://flagcdn.com/w40/za.png",
  },
  {
    name: "UAE",
    src: "https://flagcdn.com/w40/ae.png",
  },
  {
    name: "Israel",
    src: "https://flagcdn.com/w40/il.png",
  },
  {
    name: "Turkey",
    src: "https://flagcdn.com/w40/tr.png",
  },
  {
    name: "Poland",
    src: "https://flagcdn.com/w40/pl.png",
  },
  {
    name: "Czech Republic",
    src: "https://flagcdn.com/w40/cz.png",
  },
  {
    name: "Hungary",
    src: "https://flagcdn.com/w40/hu.png",
  },
  {
    name: "Greece",
    src: "https://flagcdn.com/w40/gr.png",
  },
  {
    name: "Russia",
    src: "https://flagcdn.com/w40/ru.png",
  },
  {
    name: "Ukraine",
    src: "https://flagcdn.com/w40/ua.png",
  },
  {
    name: "Kazakhstan",
    src: "https://flagcdn.com/w40/kz.png",
  },
  {
    name: "Philippines",
    src: "https://flagcdn.com/w40/ph.png",
  },
  {
    name: "Thailand",
    src: "https://flagcdn.com/w40/th.png",
  },
  {
    name: "Vietnam",
    src: "https://flagcdn.com/w40/vn.png",
  },
  {
    name: "Indonesia",
    src: "https://flagcdn.com/w40/id.png",
  },
  {
    name: "Malaysia",
    src: "https://flagcdn.com/w40/my.png",
  },
  {
    name: "Singapore",
    src: "https://flagcdn.com/w40/sg.png",
  },
  {
    name: "Philippines",
    src: "https://flagcdn.com/w40/ph.png",
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
                  className="w-8 h-6 object-cover rounded-sm shadow-sm"
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
                  className="w-8 h-6 object-cover rounded-sm shadow-sm"
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
                  className="w-8 h-6 object-cover rounded-sm shadow-sm"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}; 
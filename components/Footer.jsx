"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import YouTube from "@/public/YouTube.svg";
import InstaGram from "@/public/InstaGram.svg";
import FaceBook from "@/public/FaceBook.svg";
import Twitter from "@/public/Twitter.svg";
import Pinterest from "@/public/Pinterest.svg";
import FireBeeLogo from "@/public/WhiteFireBee.svg";
import GradBg from "@/public/GradBg.png";

const Footer = () => {
  return (
    <footer className="overflow-x-clip z-10 bg-[#12151A] relative">
      <div className="absolute h-[300px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-700/80 to-pink-600/80 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="bg-gradient-to-r from-[#8BF2B5] to-[#35C8EB] w-full h-[10px]"></div>
      <div className="md:px-20 px-6 md:py-10 py-8 text-white">
        <div className="md:flex grid grid-cols-2 md:gap-40 gap-20 mb-8">
          <div>
            <h2 className="text-2xl mb-4 text-[#FFFFFF] font-light tracking-wide">
              About
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-300 text-[#FFFFFF] font-light tracking-wide"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="hover:text-gray-300 text-[#FFFFFF] font-light tracking-wide"
                >
                  Product
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl mb-4 text-[#FFFFFF] font-light tracking-wide">
              Support
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/activate"
                  className="hover:text-gray-300 text-[#FFFFFF] font-light tracking-wide"
                >
                  Activate
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-gray-300 text-[#FFFFFF] font-light tracking-wide"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl mb-4 text-[#FFFFFF] font-light tracking-wide">
              Find Us On
            </h2>
            <div className="flex space-x-4 min-w-[200px]">
              <Link href="#" className="hover:text-gray-300">
                <Image src={YouTube} alt="youtube" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Image src={Twitter} alt="twitter" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Image src={FaceBook} alt="facebook" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Image src={InstaGram} alt="instagram" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Image src={Pinterest} alt="pinterest" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr
          style={{
            borderColor: "#525252",
          }}
        />
      </div>
      <div className="md:px-20 px-6 md:py-10 py-8 text-white">
        <div className="md:flex flex-wrap justify-between">
          <Image src={FireBeeLogo} alt="fire bee logo" />
          <p className="text-[#A4A4A5] font-extralight md:block hidden">
            Privacy Policy Terms of Service
          </p>
        </div>
        <div className="mt-8 text-[#A4A4A5] font-extralight">
          <p className="md:text-base text-xl">
            Copyright © 2020 Firebee Technologies, Inc. All rights reserved.
          </p>
          <p className="mt-4 md:text-sm">
            The statements on this page have not been evaluated by the FDA. This
            product is not intended to diagnose, treat, cure, or prevent any
            disease.
          </p>
          <p className="text-[#A4A4A5] mt-8 tracking-wide font-extralight block md:hidden">
            Privacy Policy Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

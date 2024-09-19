import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import HeroImg1 from "@/public/Heroimg1.svg";
import HeroImg2 from "@/public/HeroImg2.svg";
import CursoulImg from "@/public/CursoulImg.svg";
import CursoulSmImg1 from "@/public/CursoulSmImg1.svg";
import CursoulSmImg2 from "@/public/CursoulSmImg2.svg";
import CursoulSmImg3 from "@/public/CursoulSmImg3.svg";
import CursoulSmImg4 from "@/public/CursoulSmImg4.svg";
import CursoulSmImg5 from "@/public/CursoulSmImg5.svg";

const Hero = () => {
  return (
    <header className="bg-[#F6F6F6] py-12 px-8">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column */}
          <div className="lg:w-1/2">
            <div className="flex gap-4 mb-4">
              <Image
                src={HeroImg1}
                alt="ICNIRP Logo"
                className="md:w-[112px] md:h-[112px] w-[74px] h-[74px]"
              />
              <Image
                src={HeroImg2}
                alt="FCC Logo"
                className="md:w-[112px] md:h-[112px] w-[74px] h-[74px]"
              />
            </div>
            <div className="">
              <Image
                src={CursoulImg}
                alt="Firebee Headband"
                className="md:w-[628px] md:h-[392px] h-[203px] w-[325px]"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4">
              <Image
                src={CursoulSmImg1}
                alt="cursol sm img"
                className="md:h-[100px] md:w-[100px] w-[54px] h-[54px]"
              />
              <Image
                src={CursoulSmImg2}
                alt="cursol sm img"
                className="md:h-[100px] md:w-[100px] w-[54px] h-[54px]"
              />
              <Image
                src={CursoulSmImg3}
                alt="cursol sm img"
                className="md:h-[100px] md:w-[100px] w-[54px] h-[54px]"
              />
              <Image
                src={CursoulSmImg4}
                alt="cursol sm img"
                className="md:h-[100px] md:w-[100px] w-[54px] h-[54px]"
              />
              <Image
                src={CursoulSmImg5}
                alt="cursol sm img"
                className="md:h-[100px] md:w-[100px] w-[54px] h-[54px]"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold mb-2 tracking-wide">
              Firebee Headband
            </h1>
            <div className="flex items-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
              <span className="ml-2 text-gray-600">267 Reviews</span>
            </div>
            <p className="text-gray-600 mb-6">
              Order today and receive your Firebee by June 15th, 2021
            </p>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">
                Firebee Starter Kit
              </h2>
              <div className="bg-purple-600 text-white text-sm font-semibold py-1 px-3 rounded-full inline-block mb-4">
                MOST POPULAR KIT
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns=""
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Access to 7 signals (and future signal releases)
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns=""
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Firebee Headband
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns=""
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  $19/month membership, first 2 months free
                </li>
              </ul>
              <p className="text-sm text-gray-600 mb-4">
                The starter kit is the most affordable way to get started with
                $299 for the Firebee headband and access to the entire Firebee
                Signal Catalogue for only $19 a month. Membership can be
                cancelled anytime. No contracts. Satisfaction guaranteed.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">$299.00</span>
                <span className="text-lg text-gray-500 line-through">
                  $999.00
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Founder,s Kit</h2>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns=""
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Access to 7 signals (and future signal releases)
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns=""
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Firebee Headband
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns=""
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  No Monthly Membership
                </li>
              </ul>
              <p className="text-sm text-gray-600 mb-4">
                The Founders kit allows you to get the Firebee headband and
                access to the entire Firebee Signal Catalogue for a one-time
                fee. The Founders is kit can be paid through Affirm allowing
                customers to make small payments of $73 a month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

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
import Union1 from "@/public/Union1.svg";
import Union2 from "@/public/Union2.svg";
import Union3 from "@/public/Union3.svg";
import Union4 from "@/public/Union4.svg";
import RightArrow from "@/public/RightArrow.svg";

const Hero = () => {
  return (
    <header className="bg-[#F6F6F6] py-12 px-8">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column */}
          <div className="lg:w-1/2">
            <div className="flex gap-4">
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
            <div className="flex gap-4 md:px-6 px-0 pb-4 md:justify-normal justify-center">
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
            <div className="items-center justify-center mx-24 hidden md:block">
              <div className="flex gap-4 max-w-[420px] mt-10 font-light">
                <Image src={Union1} alt="Union 1" />
                <p>30-day Money-back Guarantee</p>
                <Image src={Union2} alt="Union 2" />
                <p>Free Shipping within USA</p>
              </div>
              <div className="flex gap-4 mt-5 max-w-[450px] font-light">
                <Image src={Union3} alt="Union 3" />
                <p>Signal Catalogue Updates Included</p>
                <Image src={Union4} alt="Union 4" />
                <p>Customer Support via E-mail, Phone, and Chat</p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold mb-2 tracking-wide flex md:justify-normal justify-center">
              Firebee Headband
            </h1>
            <div className="flex items-center mb-2 md:justify-normal justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 text-[#FFAD00] mx-1.5 fill-current"
                />
              ))}
              <span className="ml-2 text-[#3F3631] text-xl font-light">
                267 Reviews
              </span>
            </div>
            <p className="text-[#3F3631] font-light mb-6 text-center md:text-left">
              Order today and receive your Firebee by June 15th, 2021
            </p>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="md:flex flex-none pb-4 md:justify-between">
                <h2 className="text-2xl font-semibold mb-4">
                  Firebee Starter Kit
                </h2>
                <div className="flex gap-2">
                  <span className="md:text-3xl text-2xl font-light text-gray-400 line-through">
                    $999.00
                  </span>
                  <span className="md:text-3xl text-2xl font-light  text-gray-400">
                    $379.00
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#A34D9F] to-[#275FD0] text-white text-sm font-semibold py-1 px-3 rounded-full inline-block mb-4">
                MOST POPULAR KIT
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-[#3F3631] font-light">
                  <svg
                    className="w-5 h-5 text-white bg-gradient-to-r from-[#67CFE9] to-[#5EEA9F] rounded-full mr-2"
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
                <li className="flex items-center text-[#3F3631] font-light">
                  <svg
                    className="w-5 h-5 text-white bg-gradient-to-r from-[#67CFE9] to-[#5EEA9F] rounded-full mr-2"
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
                <li className="flex items-center text-[#3F3631] font-light">
                  <svg
                    className="w-5 h-5 text-white bg-gradient-to-r from-[#67CFE9] to-[#5EEA9F] rounded-full mr-2"
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
              <p className="text-sm text-gray-600 mb-4 max-w-[700px]">
                The starter kit is the most affordable way to get started with
                Firebee. Pay $299 for the Firebee headband and access to the
                entire Firebee Signal Catalogue for only $19 a month.
                <span className="font-bold mx-1">
                  Membership can be cancelled anytime. No contracts.
                  Satisfaction guaranteed.
                </span>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="md:flex md:justify-between mb-4 flex-none">
                <h2 className="text-2xl font-semibold mb-4">Founder,s Kit</h2>
                <span className="md:text-3xl text-2xl font-light  text-gray-400">
                  $799.00
                </span>
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-[#3F3631] font-light">
                  <svg
                    className="w-5 h-5 text-white bg-gradient-to-r from-[#67CFE9] to-[#5EEA9F] rounded-full mr-2"
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
                <li className="flex items-center text-[#3F3631] font-light">
                  <svg
                    className="w-5 h-5 text-white bg-gradient-to-r from-[#67CFE9] to-[#5EEA9F] rounded-full mr-2"
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
                <li className="flex items-center text-[#3F3631] font-light">
                  <svg
                    className="w-5 h-5 text-white bg-gradient-to-r from-[#67CFE9] to-[#5EEA9F] rounded-full mr-2"
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
            <div className="bg-[#07C961] py-6 rounded-full cursor-pointer hover:bg-green-500 transition">
              <div className="flex justify-center items-center text-center">
                <button className="text-white font-poppins text-3xl">
                  Add to Cart
                </button>
                <Image src={RightArrow} alt="Right Arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

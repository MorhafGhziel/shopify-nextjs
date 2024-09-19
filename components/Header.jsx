import React from "react";
import Image from "next/image";
import HeaderBg from "@/public/HeaderBg.svg";
import HeaderBgMb from "@/public/HeaderBgMb.svg";
import FireBeeLogo from "@/public/FireBeeLogo.svg";
import ProfileImg from "@/public/Profile.svg";
import Link from "next/link";
import MenuIcon from "@/public/MenuIcon.svg";

const Header = () => {
  return (
    <header>
      <Image
        src={HeaderBg}
        alt="Header Bg"
        className="min-w-full max-md:hidden"
      />
      <Image
        src={HeaderBgMb}
        alt="Header Bg Mb"
        className="min-w-full md:hidden"
      />
      <nav>
        <div className="sm:py-[18px] py-[6px] px-[30px]">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-2xl font-bold text-blue-500">
                  <Image src={FireBeeLogo} alt="FireBee Logo" />
                </Link>
              </div>
              <div className="hidden sm:ml-10 sm:flex sm:space-x-12">
                <Link
                  href="/how-it-works"
                  className="border-transparent text-gray-500 transition hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-xl font-medium"
                >
                  How It Works
                </Link>
                <Link
                  href="/signals"
                  className="border-transparent text-gray-500 transition hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-xl font-medium"
                >
                  Signals
                </Link>
                <Link
                  href="/reviews"
                  className="border-transparent text-gray-500 transition hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-xl font-medium"
                >
                  Reviews
                </Link>
                <Link
                  href="/blog"
                  className="border-transparent text-gray-500 transition hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-xl font-medium"
                >
                  Blog
                </Link>
              </div>
            </div>
            <div className="flex items-center sm:ml-6 sm:gap-10">
              <button className="bg-[#07C961] text-white w-[112px] sm:w-[154px] sm:h-[65px] h-[39px] rounded-full font-poppins">
                Buy Now
              </button>
              <div className="ml-4 block sm:hidden">
                <Image src={MenuIcon} alt="Menu Icon" className="block" />
              </div>
              <div className="bg-[#4B93D0] h-[53px] w-[53px] justify-center items-center rounded-full hidden md:flex">
                <Image src={ProfileImg} alt="Profile Img" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

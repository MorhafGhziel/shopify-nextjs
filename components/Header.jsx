import React from "react";
import Image from "next/image";
import HeaderBg from "@/public/HeaderBg.svg";
import HeaderBgMb from "@/public/HeaderBgMb.svg";
import FireBeeLogo from "@/public/FireBeeLogo.svg";

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
      <div className="container">
        <div className="py-[34px] px-[29px] gap-11 flex items-center">
          <Image src={FireBeeLogo} alt="FireBee Logo" />
          <nav className="hidden lg:block space-x-14">
            <a href="#" className="text-xl tracking-wide">
              How It Works
            </a>
            <a href="#" className="text-xl tracking-wide">
              Signals
            </a>
            <a href="#" className="text-xl tracking-wide">
              Reviews
            </a>
            <a href="#" className="text-xl tracking-wide">
              Blog
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

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
        <div className="py-[34px] px-[29px] gap-11 flex">
          <Image src={FireBeeLogo} alt="FireBee Logo" />
          <nav className="hidden lg:inline-block">
            <a href="#" className="text-xl tracking-wide">
              How It Works
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import Image from "next/image";
import CheckIcon from "@/public/CheckIcon.svg";
import BoxImg from "@/public/BoxImg.svg";
import GqLogo from "@/public/GqLogo.svg";
import GuardianLogo from "@/public/GuardianLogo.svg";
import NewYorkTimesLogo from "@/public/NewYorkTimesLogo.svg";
import MashableLogo from "@/public/MashableLogo.svg";
import CnnLogo from "@/public/CnnLogo.svg";
import WallStreetJournalLogo from "@/public/WallStreetJournalLogo.svg";

const Box = () => {
  return (
    <div className="container mx-auto px-4 py-16 pt-24">
      <h2 className="text-5xl font-extralight text-center text-[#3F3631] mb-12">
        What&apos;s in the box?
      </h2>

      <div className="mb-">
        <Image src={BoxImg} alt="Firebee product box" className="mx-auto" />
      </div>

      <div className="text-center mb-12">
        <h3 className="md:text-lg text-xl font-light text-[#3F3631] tracking-widest mb-6">
          FEATURED ON
        </h3>
        <div className="flex justify-center items-center space-x-8 flex-wrap mb-8">
          <Image src={GqLogo} alt="GQ Logo" />
          <Image src={GuardianLogo} alt="The Guardian Logo" />
          <Image src={NewYorkTimesLogo} alt="The New York Times Logo" />
          <Image src={MashableLogo} alt="Mashable Logo" />
          <Image src={CnnLogo} alt="CNN Logo" />
          <Image
            src={WallStreetJournalLogo}
            alt="The Wall Street Journal Logo"
          />
        </div>
        <div className="border-b border-[#C4C4C4] border-1 w-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-center font-extralight tracking-widest">
        {["1 Firebee headband", "1 Charging cable", "1 User manual"].map(
          (item, index) => (
            <div
              key={index}
              className="flex items-center justify-start md:justify-center space-x-2"
            >
              <Image src={CheckIcon} alt="Check icon" />
              <span className="text-2xl text-[#3F3631]">{item}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Box;

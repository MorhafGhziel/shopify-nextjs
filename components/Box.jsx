import React from "react";
import Image from "next/image";
import CheckIcon from "@/public/CheckIcon.svg";
import BoxImg from "@/public/BoxImg.svg";

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
        <h3 className="text-lg font-light text-[#3F3631] tracking-widest mb-6">
          FEATURED ON
        </h3>
        <div className="flex justify-center items-center space-x-8 flex-wrap mb-8">
          <Image src="" alt="GQ Logo" width={60} height={30} />
          <Image src="" alt="The Guardian Logo" width={100} height={30} />
          <Image src="" alt="The New York Times Logo" width={100} height={30} />
          <Image src="" alt="Mashable Logo" width={100} height={30} />
          <Image src="" alt="CNN Logo" width={60} height={30} />
          <Image
            src=""
            alt="The Wall Street Journal Logo"
            width={120}
            height={30}
          />
        </div>
        <div className="border-b border-[#C4C4C4] border-1 w-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-center font-extralight tracking-widest">
        {["1 Firebee headband", "1 Charging cable", "1 User manual"].map(
          (item, index) => (
            <div
              key={index}
              className="flex items-center justify-center space-x-2"
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

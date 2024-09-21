import React from "react";
import PersonalizedImg from "@/public/PersonalizedImg.svg";
import CheckIcon from "@/public/CheckIcon.svg";
import CheckIconBlack from "@/public/CheckIconBlack.svg";
import Image from "next/image";
import SmallBgSignals from "@/public/SmallBgSignals.svg";

const personalizedSignals = [
  {
    Image: (
      <Image
        src={CheckIconBlack}
        alt="Check Icon Black"
        className="ml-[-5px]"
      />
    ),
    description: (
      <div className="ml-[-5px]">
        <span>Can’t sleep? Turn on the </span>
        <span className="bg-gradient-to-r from-[#2E034B] via-[#002182] to-[#2E034B] text-transparent bg-clip-text font-bold">
          deep sleep
        </span>
        <span> signal</span>
      </div>
    ),
  },
  {
    Image: <Image src={CheckIcon} alt="Check Icon" />,
    description: (
      <div>
        <span>Feeling tired? Turn on the </span>
        <span className="bg-gradient-to-r from-[#FF225E] to-[#9D2AC6] text-transparent bg-clip-text font-bold">
          alert
        </span>
        <span> signal</span>
      </div>
    ),
  },
  {
    Image: <Image src={CheckIcon} alt="Check Icon" />,
    description: (
      <div>
        <span>Feeling anxious? Turn on the </span>
        <span className="bg-gradient-to-r from-[#8BF2B5] to-[#35C8EB] text-transparent bg-clip-text font-bold">
          calm
        </span>
        <span> signal</span>
      </div>
    ),
  },
  {
    Image: <Image src={CheckIcon} alt="Check Icon" />,
    description: (
      <div>
        <span>Feeling unproductive? Turn on the </span>
        <span className="bg-gradient-to-r from-[#E280DA] to-[#6694EF] text-transparent bg-clip-text font-bold">
          focus
        </span>
        <span> signal</span>
      </div>
    ),
  },
  {
    Image: <Image src={CheckIcon} alt="Check Icon" />,
    description: (
      <div>
        <span>Feeling blue? Turn on the </span>
        <span className="bg-gradient-to-r from-[#A34D9F] to-[#275FD0] text-transparent bg-clip-text font-bold">
          happy
        </span>
        <span> signal</span>
      </div>
    ),
  },
];

const PersonalizedSignals = () => {
  return (
    <section className="bg-[#FBFCFB] pt-14">
      <div className="mb-10 justify-center flex">
        <Image
          src={SmallBgSignals}
          alt="Personalized Img"
          className="md:hidden block"
        />
      </div>
      <div className="text-center">
        <h2 className="md:text-6xl text-5xl mx-10 md:mx-0 font-extralight tracking-wide text-[#3F3631]">
          What will Firebee do for me?
        </h2>
        <p className="text-[#3F3631] text-xl mt-6 font-light tracking-wide mx-10 md:mx-0">
          Firebee will help you gently nudge yourself into a different mental
          state
        </p>
      </div>
      <div className="flex justify-center">
        <div className=" ml-0 mx-6">
          <Image
            src={SmallBgSignals}
            alt="Personalized Img"
            className="hidden md:block w-[598px] h-[524px]"
          />
        </div>
        <div className="md:mt-16 mt-10 md:mx-10 mx-4">
          {personalizedSignals.map((signal, idx) => (
            <div
              key={idx}
              className="flex items-center md:gap-10 gap-6 mb-8 gap-y-12"
            >
              {signal.Image}
              <div className="font-extralight tracking-wider text-2xl">
                {signal.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalizedSignals;

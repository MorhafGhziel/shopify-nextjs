import React from "react";
import PersonalizedImg from "@/public/PersonalizedImg.svg";
import CheckIcon from "@/public/CheckIcon.svg";
import CheckIconBlack from "@/public/CheckIconBlack.svg";
import Image from "next/image";

const personalizedSignals = [
  {
    Image: <Image src={CheckIconBlack} alt="Check Icon Black" />,
    description: "Can’t sleep? Turn on the deep sleep signal ",
  },
  {
    Image: <Image src={CheckIcon} alt="Check Icon" />,
    description: "Feeling tired? Turn on the alert signal ",
  },
  {
    Image: <Image src={CheckIcon} alt="Check Icon" />,
    description: "Feeling anxious? Turn on the calm signal",
  },
  {
    Image: <Image src={CheckIcon} alt="Check Icon" />,
    description: "Feeling unproductive? Turn on the focus signal ",
  },
  {
    Image: <Image src={CheckIcon} alt="Check Icon" />,
    description: "Feeling blue? Turn on the happy signal ",
  },
];

const PersonalizedSignals = () => {
  return (
    <section className="bg-[#FBFCFB] py-14">
      <div className="text-center">
        <h2 className="text-6xl font-extralight tracking-wide text-[#3F3631]">
          What will Firebee do for me?
        </h2>
        <p className="text-[#3F3631] text-xl mt-6 font-light tracking-wide">
          Firebee will help you gently nudge yourself into a different mental
          state
        </p>
      </div>
      <div></div>
    </section>
  );
};

export default PersonalizedSignals;

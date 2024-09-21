import React from "react";
import Image from "next/image";
import BedTime from "@/public/BedTime.svg";
import Deepleep from "@/public/DeepSleep.svg";
import Relax from "@/public/Relax.svg";
import Calm from "@/public/Calm.svg";
import Focus from "@/public/Focus.svg";
import Happy from "@/public/Happy.svg";
import Alert from "@/public/Alert.svg";
import FireBee from "@/public/FireBee.svg";
import SignalsBg from "@/public/SignalsBgImg.svg";

const signals = [
  {
    Image: <Image src={BedTime} alt="Bed Time" />,

    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    Image: <Image src={Deepleep} alt="Bed Time" />,

    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    Image: <Image src={Relax} alt="Bed Time" />,

    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    Image: <Image src={Calm} alt="Bed Time" />,

    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    Image: <Image src={Focus} alt="Bed Time" />,

    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    Image: <Image src={Happy} alt="Bed Time" />,

    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    Image: <Image src={Alert} alt="Bed Time" />,

    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    Image: <Image src={FireBee} alt="Bed Time" />,

    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
];

const Signals = () => {
  return (
    <section className="relative overflow-x-clip">
      <Image
        src={SignalsBg}
        alt="Signals Bg"
        className="absolute z-[-10] left-[-10px] top-[-30px] hidden lg:block"
      />
      <div className="text-center">
        <h2 className="text-5xl font-extralight tracking-wide text-[#3F3631]">
          Firebee Signals
        </h2>
        <p className="text-[#3F3631] text-xl mt-2 font-light tracking-wide">
          A signal for every situation
        </p>
      </div>
      <div className="p-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
          {signals.map((signal, idx) => (
            <div
              key={idx}
              className="md:flex bg-[#FBFBFD] w-fit p-6 rounded-xl gap-6"
            >
              <div className="flex justify-center md:block shrink-0">
                {signal.Image}
              </div>
              <div className="text-[#3F3631] text-xl mt-4 md:mt-0 font-extralight leading-8 ">
                {signal.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={SignalsBg}
        alt="Signals Bg"
        className="absolute z-[-10] top-[570px] left-[1200px] hidden lg:block"
      />
    </section>
  );
};

export default Signals;

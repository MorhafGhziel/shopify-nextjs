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
    <section>
      <div className="text-center">
        <h2 className="text-5xl font-extralight tracking-wide text-[#3F3631]">
          Firebee Signals
        </h2>
        <p className="text-[#3F3631] text-xl mt-2 font-light tracking-wide">
          A signal for every situation
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {signals.map((signal, idx) => (
          <div key={idx}>
            {signal.Image}
            {signal.description}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Signals;

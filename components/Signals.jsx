import React from "react";
import Image from "next/image";
import BedTime from "@/public/BedTime.svg";
import Deepleep from "@/public/Deepleep.svg";
import Relax from "@/public/Relax.svg";
import Calm from "@/public/Calm.svg";
import Focus from "@/public/Focus.svg";
import Happy from "@/public/Happy.svg";
import Alert from "@/public/Alert.svg";
import FireBee from "@/public/FireBee.svg";

const signals = [
  {
    name: "Bedtime",
    color: "bg-blue-300",
    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    name: "Deep Sleep",
    color: "bg-indigo-900",
    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    name: "Relax",
    color: "bg-green-300",
    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    name: "Calm",
    color: "bg-green-200",
    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    name: "Focus",
    color: "bg-purple-300",
    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    name: "Happy",
    color: "bg-purple-600",
    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    name: "Alert",
    color: "bg-gradient-to-br from-red-400 to-purple-500",
    description:
      "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
  },
  {
    name: "Love",
    color: "bg-gradient-to-br from-red-400 to-purple-500",
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
    </section>
  );
};

export default Signals;

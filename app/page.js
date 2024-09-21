import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Guarantee from "@/components/Guarantee";
import Signals from "@/components/Signals";
import PersonalizedSignals from "@/components/PersonalizedSignals";
import Box from "@/components/Box";
import Frequently from "@/components/Frequently";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <Guarantee />
      <Signals />
      <PersonalizedSignals />
      <Box />
      <Frequently />
    </>
  );
};

export default page;

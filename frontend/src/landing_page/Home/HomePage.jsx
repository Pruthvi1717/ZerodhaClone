import React from "react";
import Awards from "./Awards";
import Education from "./Education"; 
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import OpenAccount from "../OpenAccount";

export default function HomePage() {
  return (
    <>
      <br /><br />
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      
    </>
  );
}
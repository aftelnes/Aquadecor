"use client";
import { useEffect } from "react";

import pump from "../../../public/images/Pages/pumps/pump.jpg";
import pump2 from "../../../public/images/Pages/pumps/pump2.jpg";
import pump3 from "../../../public/images/Pages/pumps/pump3.jpeg";

import appearing from "@/tools/appearing";
import InfoCard from "@/components/InfoBlock/InfoCard";
import pageStyle from "@/styles/pageStyle";
import createMetadata from "@/tools/createMetadata";

const Pumps = () => {
  useEffect(() => {
    appearing();
    createMetadata({ text: "Насосы для бассейны" });
  });
  return (
    <div className={pageStyle.pageStyle}>
      <hr className={pageStyle.pageHr} />
      <h1 className={pageStyle.pageH1}>Насосы для бассейна</h1>

      <InfoCard image={pump.src} imageLocation="left" imageAlt="Насос" />
      <InfoCard image={pump2.src} imageLocation="right" imageAlt="Насос" />
      <InfoCard image={pump3.src} imageLocation="left" imageAlt="Насос" />
    </div>
  );
};
export default Pumps;

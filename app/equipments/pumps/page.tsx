"use client";
import { useEffect } from "react";

import appearing from "@/tools/appearing";
import pump from "../../../public/images/Pages/pumps/pump.jpg";
import pump2 from "../../../public/images/Pages/pumps/pump2.jpg";
import pump3 from "../../../public/images/Pages/pumps/pump3.jpeg";
import InfoCard from "@/components/InfoBlock/InfoCard";

import pageStyle from "@/styles/pageStyles/pageStyle";

const Pumps = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className={pageStyle.pageStyle}>
      <hr className={pageStyle.pageHr} />
      <h1 className={pageStyle.pageH1}>Насосы для бассейна</h1>

      <InfoCard
        image={pump.src}
        imageStyle="w-[500px] h-[350px]"
        imageLocation="left"
        imageAlt="Насос"
      />
      <InfoCard
        image={pump2.src}
        imageStyle="w-[500px] h-[350px] ml-auto"
        imageLocation="right"
        imageAlt="Насос"
      />
      <InfoCard
        image={pump3.src}
        imageStyle="w-[500px] h-[350px]"
        imageLocation="left"
        imageAlt="Насос"
      />
    </div>
  );
};
export default Pumps;

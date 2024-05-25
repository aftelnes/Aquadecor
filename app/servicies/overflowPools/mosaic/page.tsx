"use client";
import { useEffect } from "react";

import appearing from "@/tools/appearing";
import mosaic1 from "../../../../public/images/Pages/mosaic/mosaic1.jpg";
import mosaic2 from "../../../../public/images/Pages/mosaic/mosaic2.jpg";
import mosaic3 from "../../../../public/images/Pages/mosaic/mosaic3.jpeg";
import InfoCard from "@/components/InfoBlock/InfoCard";

import pageStyle from "@/styles/pageStyles/pageStyle";
import createMetadata from "@/tools/createMetadata";

const OverflowMosaicPools = () => {
  useEffect(() => {
    appearing();
    createMetadata({ text: "Перелевные мозаичные бассейны" });
  });
  return (
    <div className={pageStyle.pageStyle}>
      <hr className={pageStyle.pageHr} />
      <h1 className={pageStyle.pageH1}>Мозаичные бассейны</h1>

      <InfoCard image={mosaic1.src} imageLocation="left" imageAlt="Бассейн" />
      <InfoCard image={mosaic2.src} imageLocation="right" imageAlt="Бассейн" />
      <InfoCard image={mosaic3.src} imageLocation="left" imageAlt="Бассейн" />
    </div>
  );
};
export default OverflowMosaicPools;

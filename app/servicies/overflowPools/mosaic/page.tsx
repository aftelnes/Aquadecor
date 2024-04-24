"use client";
import { useEffect } from "react";

import appearing from "@/tools/appearing";
import mosaic1 from "../../../../public/images/Pages/mosaic/mosaic1.jpg";
import mosaic2 from "../../../../public/images/Pages/mosaic/mosaic2.jpg";
import mosaic3 from "../../../../public/images/Pages/mosaic/mosaic3.jpeg";
import InfoCard from "@/components/InfoBlock/InfoCard";

import pageStyle from "@/styles/pageStyles/pageStyle";

const OverflowMosaicPools = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className={pageStyle.pageStyle}>
      <hr className={pageStyle.pageHr} />
      <h1 className={pageStyle.pageH1}>Бетонные бассейны</h1>

      <InfoCard
        image={mosaic1.src}
        imageStyle="w-[500px] h-[350px]"
        imageLocation="left"
        imageAlt="Бассейн"
      />
      <InfoCard
        image={mosaic2.src}
        imageStyle="w-[500px] h-[350px] ml-auto"
        imageLocation="right"
        imageAlt="Бассейн"
      />
      <InfoCard
        image={mosaic3.src}
        imageStyle="w-[500px] h-[350px]"
        imageLocation="left"
        imageAlt="Бассейн"
      />
    </div>
  );
};
export default OverflowMosaicPools;

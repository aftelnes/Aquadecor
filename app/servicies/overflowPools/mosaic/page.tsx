"use client";
import { useEffect } from "react";

import appearing from "@/tools/appearing";
import mosaic1 from "../../../../public/images/Pages/mosaic/mosaic1.jpg";
import mosaic2 from "../../../../public/images/Pages/mosaic/mosaic2.jpg";
import mosaic3 from "../../../../public/images/Pages/mosaic/mosaic3.jpeg";
import InfoCard from "@/components/InfoBlock/InfoCard";

import pageStyle from "@/styles/pageStyles/pageStyle";
import infoCardStyle from "@/styles/infoCardStyles/infoCardStyles";

const OverflowMosaicPools = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className={pageStyle.pageStyle}>
      <hr className={pageStyle.pageHr} />
      <h1 className={pageStyle.pageH1}>Мозаичные бассейны</h1>

      <InfoCard
        image={mosaic1.src}
        imageStyle={infoCardStyle.leftImage}
        imageLocation="left"
        imageAlt="Бассейн"
      />
      <InfoCard
        image={mosaic2.src}
        imageStyle={infoCardStyle.rightImage}
        imageLocation="right"
        imageAlt="Бассейн"
      />
      <InfoCard
        image={mosaic3.src}
        imageStyle={infoCardStyle.leftImage}
        imageLocation="left"
        imageAlt="Бассейн"
      />
    </div>
  );
};
export default OverflowMosaicPools;

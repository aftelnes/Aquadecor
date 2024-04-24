"use client";
import { useEffect } from "react";

import beton1 from "../../../../public/images/Pages/concrete_pools/beton1.jpg";
import beton2 from "../../../../public/images/Pages/concrete_pools/beton2.jpg";
import beton3 from "../../../../public/images/Pages/concrete_pools/beton3.jpeg";
import InfoCard from "@/components/InfoBlock/InfoCard";

import pageStyle from "@/styles/pageStyles/pageStyle";
import appearing from "@/tools/appearing";
import createMetadata from "@/tools/createMetadata";

const SkimmerConcretePools = () => {
  useEffect(() => {
    appearing();
    createMetadata({ text: "Бетонные скиммерные бассейны" });
  });
  return (
    <div className={pageStyle.pageStyle}>
      <hr className={pageStyle.pageHr} />
      <h1 className={pageStyle.pageH1}>Бетонные бассейны</h1>

      <InfoCard
        image={beton1.src}
        imageStyle="w-[500px] h-[350px]"
        imageLocation="left"
        imageAlt="Бассейн"
      />
      <InfoCard
        image={beton2.src}
        imageStyle="w-[500px] h-[350px] ml-auto"
        imageLocation="right"
        imageAlt="Бассейн"
      />
      <InfoCard
        image={beton3.src}
        imageStyle="w-[500px] h-[350px]"
        imageLocation="left"
        imageAlt="Бассейн"
      />
    </div>
  );
};
export default SkimmerConcretePools;

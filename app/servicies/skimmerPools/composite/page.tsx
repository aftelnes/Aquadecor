"use client";
import { useEffect } from "react";

import appearing from "@/tools/appearing";
import createMetadata from "@/tools/createMetadata";
import beton1 from "../../../../public/images/Pages/concrete_pools/beton1.jpg";
import beton2 from "../../../../public/images/Pages/concrete_pools/beton2.jpg";
import beton3 from "../../../../public/images/Pages/concrete_pools/beton3.jpeg";
import InfoCard from "@/components/InfoBlock/InfoCard";

import pageStyle from "@/styles/pageStyle";

const SkimmerCompositePools = () => {
  useEffect(() => {
    appearing();
    createMetadata({ text: "Скиммерные композитные бассейны" });
  });
  return (
    <div className={pageStyle.pageStyle}>
      <hr className={pageStyle.pageHr} />
      <h1 className={pageStyle.pageH1}>Композитные бассейны</h1>

      <InfoCard image={beton1.src} imageLocation="left" imageAlt="Бассейн" />
      <InfoCard image={beton2.src} imageLocation="right" imageAlt="Бассейн" />
      <InfoCard image={beton3.src} imageLocation="left" imageAlt="Бассейн" />
    </div>
  );
};
export default SkimmerCompositePools;

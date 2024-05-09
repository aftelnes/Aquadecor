"use client";
import { useEffect } from "react";

import appearing from "@/tools/appearing";
import beton1 from "../../../../public/images/Pages/concrete_pools/beton1.jpg";
import beton2 from "../../../../public/images/Pages/concrete_pools/beton2.jpg";
import beton3 from "../../../../public/images/Pages/concrete_pools/beton3.jpeg";
import InfoCard from "@/components/InfoBlock/InfoCard";

import pageStyle from "@/styles/pageStyles/pageStyle";
import infoCardStyle from "@/styles/infoCardStyles/infoCardStyles";

const ChildConcretePools = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className={pageStyle.pageStyle}>
      <hr className={pageStyle.pageHr} />
      <h1 className={pageStyle.pageH1}>Бетонные бассейны</h1>

      <InfoCard
        image={beton1.src}
        imageStyle={infoCardStyle.leftImage}
        imageLocation="left"
        imageAlt="Бассейн"
      />
      <InfoCard
        image={beton2.src}
        imageStyle={infoCardStyle.rightImage}
        imageLocation="right"
        imageAlt="Бассейн"
      />
      <InfoCard
        image={beton3.src}
        imageStyle={infoCardStyle.leftImage}
        imageLocation="left"
        imageAlt="Бассейн"
      />
    </div>
  );
};
export default ChildConcretePools;

"use client";
import { useEffect } from "react";

import appearing from "@/tools/appearing";
import polypropylene1 from "../../../../public/images/Pages/polypropylene_pools/polypropylene_pool1.jpg";
import polypropylene2 from "../../../../public/images/Pages/polypropylene_pools/polypropylene_pool2.jpg";
import polypropylene3 from "../../../../public/images/Pages/polypropylene_pools/polypropylene_pool3.jpeg";
import InfoCard from "@/components/InfoBlock/InfoCard";

import pageStyle from "@/styles/pageStyle";
import createMetadata from "@/tools/createMetadata";

const OverflowPolypropylenePools = () => {
  useEffect(() => {
    appearing();
    createMetadata({ text: "Перелевные полипропиленовые бассейны" });
  });
  return (
    <div className={pageStyle.pageStyle}>
      <hr className={pageStyle.pageHr} />
      <h1 className={pageStyle.pageH1}>Полипропиленовые бассейны</h1>

      <InfoCard
        image={polypropylene1.src}
        imageLocation="left"
        imageAlt="Бассейн"
      />
      <InfoCard
        image={polypropylene2.src}
        imageLocation="right"
        imageAlt="Бассейн"
      />
      <InfoCard
        image={polypropylene3.src}
        imageLocation="left"
        imageAlt="Бассейн"
      />
    </div>
  );
};
export default OverflowPolypropylenePools;

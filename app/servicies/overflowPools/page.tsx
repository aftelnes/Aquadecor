"use client";
import { useEffect } from "react";
import Link from "next/link";

import concrete from "../../../public/images/Pages/concrete_pools/beton1.jpg";
import polypropylene from "../../../public/images/Pages/polypropylene_pools/polypropylene_pool1.jpg";

import sectionStyle from "@/styles/sectionStyle/sectionStyle";

import InfoBlockInPage from "@/components/InfoBlock/InfoBlockInPage";
import appearing from "@/tools/appearing";

const ConcretePools = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className={sectionStyle.sectionStyle}>
      <hr className={sectionStyle.sectionHr} />
      <h1 className={sectionStyle.sectionH1}>Перелевные бассейны</h1>

      <Link href="/servicies/overflowPools/polypropylene">
        <InfoBlockInPage
          img={polypropylene.src}
          header="Полипропилен"
          text="текст"
        />
      </Link>
      <Link href="/servicies/overflowPools/concrete">
        <InfoBlockInPage img={concrete.src} header="Бетонные" text="текст" />
      </Link>
    </div>
  );
};
export default ConcretePools;

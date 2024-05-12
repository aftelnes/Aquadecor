"use client";
import { useEffect } from "react";
import Link from "next/link";

import concrete from "../../../public/images/Pages/concrete_pools/beton1.jpg";
import polypropylene from "../../../public/images/Pages/polypropylene_pools/polypropylene_pool1.jpg";
import film from "../../../public/images/Pages/film_pools/film1.jpg";
import mosaic from "../../../public/images/Pages/mosaic/mosaic1.jpg";

import InfoBlockInPage from "@/components/InfoBlock/InfoBlockInPage";
import appearing from "@/tools/appearing";

import pageStyle from "@/styles/pageStyles/pageStyle";

const OverflowPools = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className={pageStyle.pageStyle}>
      <hr className={pageStyle.pageHr} />
      <h1 className={pageStyle.pageH1}>Перелевные бассейны</h1>

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
      <Link href="/servicies/overflowPools/film">
        <InfoBlockInPage img={film.src} header="Плёночные" text="текст" />
      </Link>
      <Link href="/servicies/overflowPools/mosaic">
        <InfoBlockInPage img={mosaic.src} header="Мозаика" text="текст" />
      </Link>
    </div>
  );
};
export default OverflowPools;

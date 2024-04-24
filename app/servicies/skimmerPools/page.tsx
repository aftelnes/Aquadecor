"use client";
import { useEffect } from "react";
import Link from "next/link";

import concrete from "../../../public/images/Pages/concrete_pools/beton1.jpg";
import polypropylene from "../../../public/images/Pages/polypropylene_pools/polypropylene_pool1.jpg";
import film from "../../../public/images/Pages/film_pools/film1.jpg";
import mosaic from "../../../public/images/Pages/mosaic/mosaic1.jpg";

import sectionStyle from "@/styles/sectionStyle/sectionStyle";

import InfoBlockInPage from "@/components/InfoBlock/InfoBlockInPage";
import appearing from "@/tools/appearing";
import createMetadata from "@/tools/createMetadata";

const SkimmerPools = () => {
  useEffect(() => {
    appearing();
    createMetadata({ text: "Скиммерные бассейны" });
  });

  return (
    <div className={sectionStyle.sectionStyle}>
      <hr className={sectionStyle.sectionHr} />
      <h1 className={sectionStyle.sectionH1}>Скиммерные бассейны</h1>

      <Link href="/servicies/skimmerPools/polypropylene">
        <InfoBlockInPage
          img={polypropylene.src}
          header="Полипропилен"
          text="текст"
        />
      </Link>
      <Link href="/servicies/skimmerPools/concrete">
        <InfoBlockInPage img={concrete.src} header="Бетонные" text="текст" />
      </Link>
      <Link href="/servicies/skimmerPools/film">
        <InfoBlockInPage
          img={film.src}
          header="Плёночные"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi mollitia quisquam quibusdam a architecto id minus. Minima esse hic, excepturi minus ipsam error quia temporibus tempore dignissimos similique consectetur.
"
        />
      </Link>
      <Link href="/servicies/skimmerPools/mosaic">
        <InfoBlockInPage img={mosaic.src} header="Мозаика" text="текст" />
      </Link>
    </div>
  );
};
export default SkimmerPools;

"use client";
import { useEffect } from "react";
import Link from "next/link";

import concrete from "../../../public/images/Pages/concrete_pools/beton1.jpg";
import polypropylene from "../../../public/images/Pages/polypropylene_pools/polypropylene_pool1.jpg";
import film from "../../../public/images/Pages/film_pools/film1.jpg";
import mosaic from "../../../public/images/Pages/mosaic/mosaic1.jpg";

import pageStyle from "@/styles/pageStyles/pageStyle";

import InfoBlockInPage from "@/components/InfoBlock/InfoBlockInPage";
import appearing from "@/tools/appearing";
import createMetadata from "@/tools/createMetadata";

const ChildPools = () => {
  useEffect(() => {
    appearing();
    createMetadata({ text: "Детские бассейны" });
  });

  return (
    <div className={pageStyle.pageStyle}>
      <hr className={pageStyle.pageHr} />
      <h1 className={pageStyle.pageH1}>Детские бассейны</h1>

      <Link href="/servicies/childPools/polypropylene">
        <InfoBlockInPage
          img={polypropylene.src}
          header="Полипропилен"
          text="текст"
        />
      </Link>
      <Link href="/servicies/childPools/composite">
        <InfoBlockInPage img={concrete.src} header="Композитные" text="текст" />
      </Link>
      <Link href="/servicies/childPools/film">
        <InfoBlockInPage img={film.src} header="Плёночные" text="текст" />
      </Link>
      <Link href="/servicies/childPools/mosaic">
        <InfoBlockInPage img={mosaic.src} header="Мозаика" text="текст" />
      </Link>
    </div>
  );
};
export default ChildPools;

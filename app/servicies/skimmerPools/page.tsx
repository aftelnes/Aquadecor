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

const SkimmerPools = () => {
  useEffect(() => {
    appearing();
    createMetadata({ text: "Скиммерные бассейны" });
  });

  return (
    <div className={pageStyle.pageStyle}>
      <hr className={pageStyle.pageHr} />
      <h1 className={pageStyle.pageH1}>Скиммерные бассейны</h1>

      <Link href="/servicies/skimmerPools/polypropylene">
        <InfoBlockInPage
          img={polypropylene.src}
          header="Полипропилен"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi voluptas quis eum ex obcaecati eos vitae accusantium ab? Adipisci optio dolores possimus animi ipsum illo debitis quaerat accusantium ratione recusandae."
        />
      </Link>
      <Link href="/servicies/skimmerPools/concrete">
        <InfoBlockInPage
          img={concrete.src}
          header="Бетонные"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam obcaecati vitae quasi nemo? Assumenda corporis, rerum dolorum magnam vitae labore laudantium sequi sed est dolor at quia iusto eaque repellendus?"
        />
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
        <InfoBlockInPage
          img={mosaic.src}
          header="Мозаика"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae id dolore delectus totam nostrum explicabo vitae optio! Quidem quasi, ea nemo quibusdam modi dolores incidunt nobis corporis doloremque accusamus sint."
        />
      </Link>
    </div>
  );
};
export default SkimmerPools;

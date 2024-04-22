"use client";
import { useEffect } from "react";

import appearing from "@/tools/appearing";
import film1 from "../../../../public/images/Pages/film_pools/film1.jpg";
import film2 from "../../../../public/images/Pages/film_pools/film2.png";
import film3 from "../../../../public/images/Pages/film_pools/film3.jpg";
import InfoCard from "@/components/InfoBlock/InfoCard";

import pageStyle from "@/styles/pageStyles/pageStyle";

const FilmsPools = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className={pageStyle.pageStyle}>
      <hr className={pageStyle.pageHr} />
      <h1 className={pageStyle.pageH1}>Бетонные бассейны</h1>

      <InfoCard
        image={film1.src}
        imageStyle="w-[500px] h-[350px]"
        imageLocation="left"
        imageAlt="Бассейн>"
      />
      <InfoCard
        image={film2.src}
        imageStyle="w-[500px] h-[350px] ml-auto"
        imageLocation="right"
        imageAlt="Бассейн>"
      />
      <InfoCard
        image={film3.src}
        imageStyle="w-[500px] h-[350px]"
        imageLocation="left"
        imageAlt="Бассейн>"
      />
    </div>
  );
};
export default FilmsPools;

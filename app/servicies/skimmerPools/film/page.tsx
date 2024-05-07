"use client";
import { useEffect } from "react";

import appearing from "@/tools/appearing";
import film1 from "../../../../public/images/Pages/film_pools/film1.jpg";
import film2 from "../../../../public/images/Pages/film_pools/film2.png";
import film3 from "../../../../public/images/Pages/film_pools/film3.jpg";
import InfoCard from "@/components/InfoBlock/InfoCard";

import pageStyle from "@/styles/pageStyles/pageStyle";
import infoCardStyle from "@/styles/infoCardStyles/infoCardStyles";

const SkimmerFilmsPools = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className={pageStyle.pageStyle}>
      <hr className={pageStyle.pageHr} />
      <h1 className={pageStyle.pageH1}>Плёночные бассейны</h1>

      <InfoCard
        image={film1.src}
        imageStyle={infoCardStyle.leftImage}
        imageLocation="left"
        imageAlt="Бассейн"
      />
      <InfoCard
        image={film2.src}
        imageStyle={infoCardStyle.rightImage}
        imageLocation="right"
        imageAlt="Бассейн"
      />
      <InfoCard
        image={film3.src}
        imageStyle={infoCardStyle.leftImage}
        imageLocation="left"
        imageAlt="Бассейн"
      />
    </div>
  );
};
export default SkimmerFilmsPools;

"use client";
import { useEffect } from "react";

import InfoBlockMainPge from "../InfoBlock/InfoBlockMainPage";
import appearing from "@/tools/appearing";
import Link from "next/link";

import buildPool from "../../public/images/build_pool.jpg";
import createPool from "../../public/images/create_pool.jpeg";
import polypropilen from "../../public/images/polypropylene.jpeg";
import pump from "../../public/images/pump.jpg";
import poolStation from "../../public/images/pool_station.jpg";
import font from "../../public/images/font.jpg";

const Offers = () => {
  useEffect(() => {
    appearing();
  });

  return (
    <div className="element-animation h-auto m-auto xl:w-[1200px] xl:mt-20 lg:mt-10 md:mt-8">
      <h1 className="text-animation text-2xl mt-5 xl:text-5xl xl:mb-16 lg:mb-12 lg:text-4xl md:text-3xl md:mb-10">
        Мы предлагаем
      </h1>
      <div className="element-animation flex flex-col items-center xl:flex-row lg:flex lg:flex-row lg:justify-between md:flex-row md:flex md:justify-between">
        <Link href="/servicies/overflowPools">
          <InfoBlockMainPge
            textHeader="Переливные бассейны"
            cost={"от 237 000"}
            imgSrc={buildPool.src}
          />
        </Link>
        <Link href="/servicies/skimmerPools">
          <InfoBlockMainPge
            textHeader="Скиммерные бассейны"
            cost={"от 150 000"}
            imgSrc={createPool.src}
          />
        </Link>
        <Link href="/servicies/childPools">
          <InfoBlockMainPge
            textHeader="Детские бассейны"
            cost={"от 100 000"}
            imgSrc={poolStation.src}
          />
        </Link>
      </div>
      <div className="element-animation flex flex-col items-center xl:flex-row lg:flex lg:flex-row lg:justify-between md:flex-row md:flex md:justify-between">
        <Link href="/equipments">
          <InfoBlockMainPge
            textHeader="Оборудование"
            cost={"от 15 000"}
            imgSrc={pump.src}
          />
        </Link>
        <InfoBlockMainPge
          textHeader="Чаши из полипропилена"
          cost={"от 30 000"}
          imgSrc={polypropilen.src}
        />
        <InfoBlockMainPge
          textHeader="Изготовление купелей"
          cost={"от 35 000"}
          imgSrc={font.src}
        />
      </div>
    </div>
  );
};

export default Offers;

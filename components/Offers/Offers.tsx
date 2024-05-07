"use client";
import { useEffect } from "react";

import buildPool from "../../public/images/build_pool.jpg";
import createPool from "../../public/images/create_pool.jpeg";
import polypropilen from "../../public/images/polypropylene.jpeg";
import pump from "../../public/images/pump.jpg";
import poolStation from "../../public/images/pool_station.jpg";
import font from "../../public/images/font.jpg";

import InfoBlockMainPge from "../InfoBlock/InfoBlockMainPage";
import appearing from "@/tools/appearing";
import Link from "next/link";

const Offers = () => {
  useEffect(() => {
    appearing();
  });

  return (
    <div className="element-animation h-auto xl:w-[1200px]">
      <h1 className="text-animation xl:text-5xl xl:pt-10 lg:text-4xl md:text-3xl">
        Мы предлагаем
      </h1>
      <div className="element-animation lg:flex lg:justify-between md:flex md:justify-between">
        <Link href="/servicies/overflowPools">
          <InfoBlockMainPge
            textHeader="Перелевные бассейны"
            textDesc="Перелевные бассейны"
            cost={"от 237 000"}
            imgSrc={buildPool.src}
          />
        </Link>
        <InfoBlockMainPge
          textHeader="Скиммерные бассейны"
          textDesc="Скиммерные бассейны"
          cost={"от 150 000"}
          imgSrc={createPool.src}
        />
        <InfoBlockMainPge
          textHeader="Детсие бассейны"
          textDesc="Детсие бассейны"
          cost={"от 100 000"}
          imgSrc={poolStation.src}
        />
      </div>
      <div className="element-animation lg:flex lg:justify-between md:flex md:justify-between">
        <Link href="/equipments">
          <InfoBlockMainPge
            textHeader="Оборудование"
            textDesc="Оборудование"
            cost={"от 15 000"}
            imgSrc={pump.src}
          />
        </Link>
        <InfoBlockMainPge
          textHeader="Ёмкости из полипропилена"
          textDesc="Ёмкости из полипропилена"
          cost={"от 30 000"}
          imgSrc={polypropilen.src}
        />
        <InfoBlockMainPge
          textHeader="Изготовление купелей"
          textDesc="Изготовление купелей"
          cost={"от 35 000"}
          imgSrc={font.src}
        />
      </div>
    </div>
  );
};

export default Offers;

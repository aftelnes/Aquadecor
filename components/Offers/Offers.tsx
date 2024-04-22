"use client";
import { useEffect } from "react";

import buildPool from "../../public/images/build_pool.jpg";
import createPool from "../../public/images/create_pool.jpeg";
import polypropilen from "../../public/images/polypropylene.jpeg";
import pump from "../../public/images/pump.jpg";
import poolStation from "../../public/images/pool_station.jpg";
import font from "../../public/images/font.jpg";
import InfoBlock from "../InfoBlock/InfoBlockMainPage";
import appearing from "@/tools/appearing";
import Link from "next/link";

const Offers = () => {
  useEffect(() => {
    appearing();
  });

  return (
    <div className="container element-animation h-auto">
      <h1 className="text-animation">Мы предлагаем</h1>
      <div className="lg:flex lg:justify-between element-animation md:grid md:grid-cols-1 md:gap-1 ">
        <Link href="/servicies/overflowPools">
          <InfoBlock
            textHeader="Перелевные бассейны"
            textDesc="Перелевные бассейны"
            cost={"от 237 000"}
            imgSrc={buildPool.src}
          />
        </Link>
        <InfoBlock
          textHeader="Скиммерные бассейны"
          textDesc="Скиммерные бассейны"
          cost={"от 150 000"}
          imgSrc={createPool.src}
        />
        <InfoBlock
          textHeader="Детсие бассейны"
          textDesc="Детсие бассейны"
          cost={"от 100 000"}
          imgSrc={poolStation.src}
        />
      </div>
      <div className="lg:flex lg:justify-between element-animation md:grid md:grid-cols-1 md:gap-1">
        <Link href="/equipments">
          <InfoBlock
            textHeader="Оборудование"
            textDesc="Оборудование"
            cost={"от 15 000"}
            imgSrc={pump.src}
          />
        </Link>
        <InfoBlock
          textHeader="Ёмкости из полипропилена"
          textDesc="Изготовление ёмкостей из полипропилена"
          cost={"от 30 000"}
          imgSrc={polypropilen.src}
        />
        <InfoBlock
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

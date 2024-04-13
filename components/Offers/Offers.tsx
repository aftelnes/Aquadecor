"use client";
import { useEffect } from "react";

import buildPool from "../../public/images/build_pool.jpg";
import createPool from "../../public/images/create_pool.jpeg";
import polypropilen from "../../public/images/polypropylene.jpeg";
import pump from "../../public/images/pump.jpg";
import poolStation from "../../public/images/pool_station.jpg";
import font from "../../public/images/font.jpg";
import InfoBlock from "../InfoBlock/InfoBlock";
import appearing from "@/tools/appearing";

const Offers = () => {
  useEffect(() => {
    appearing();
  });

  return (
    <div className="container element-animation h-auto">
      <h1 className="text-animation">Мы предлагаем</h1>
      <div className="lg:flex lg:justify-between element-animation md:grid md:grid-cols-1 md:gap-1 ">
        <InfoBlock
          textHeader="Строительство бассейнов под ключ"
          textDesc="Материал - бетон, лайнер"
          cost={"от 237 000"}
          imgSrc={buildPool.src}
        />
        <InfoBlock
          textHeader="Готовые каркасы"
          textDesc="Готовые каркасы"
          cost={"от 150 000"}
          imgSrc={createPool.src}
        />
        <InfoBlock
          textHeader="Ёмкойстей из полипропилена"
          textDesc="Изготовление ёмкойстей из полипропилена"
          cost={"от 30 000"}
          imgSrc={polypropilen.src}
        />
      </div>
      <div className="lg:flex lg:justify-between element-animation md:grid md:grid-cols-1 md:gap-1">
        <InfoBlock
          textHeader="Насосы"
          textDesc="Насосы"
          cost={"от 15 000"}
          imgSrc={pump.src}
        />
        <InfoBlock
          textHeader="Станции"
          textDesc="Станции"
          cost={"от 20 000"}
          imgSrc={poolStation.src}
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

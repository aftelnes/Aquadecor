"use client";

import { useEffect } from "react";

import InfoBlock from "../offers/infoblock/page";
import appearing from "@/tools/appearing";

import otdelka from "../../../public/images/otdelka.jpg";
import proektirovanie from "../../../public/images/proektirovanie.jpg";
import remont from "../../../public/images/remont.jpg";

const AlsoWeDo = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div>
      <h1 className="text-animation">Так же мы делаем</h1>
      <div className="lg:flex lg:justify-between element-animation md:grid md:grid-cols-1 md:gap-1">
        <InfoBlock
          textHeader="Оттеделка бассейнов"
          textDesc="Материал - бетон, лайнер"
          cost={"от 37 000"}
          imgSrc={otdelka.src}
        />
        <InfoBlock
          textHeader="Проектирование"
          textDesc="Проектирование"
          cost={"от 50 000"}
          imgSrc={proektirovanie.src}
        />
        <InfoBlock
          textHeader="Ремонт бассейнов"
          textDesc="Ремонт бассейнов"
          cost={"от 15 000"}
          imgSrc={remont.src}
        />
      </div>
    </div>
  );
};

export default AlsoWeDo;

"use client";

import { useEffect } from "react";

import InfoBlockMainPage from "@/components/InfoBlock/InfoBlockMainPage";
import appearing from "@/tools/appearing";

import otdelka from "../../public/images/otdelka.jpg";
import proektirovanie from "../../public/images/proektirovanie.jpg";
import remont from "../../public/images/remont.jpg";

const AlsoWeDo = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className="element-animation h-auto m-auto xl:w-[1200px] xl:mt-20 lg:mt-10 md:mt-8">
      <h1 className="text-animation xl:text-5xl xl:mb-16 lg:mb-12 lg:text-4xl md:text-3xl md:mb-10">
        Так же мы делаем
      </h1>
      <div className="lg:flex lg:justify-between element-animation md:grid md:grid-cols-3 md:gap-1">
        <InfoBlockMainPage
          textHeader="Оттеделка бассейнов"
          textDesc="Материал - бетон, лайнер"
          cost={"от 37 000"}
          imgSrc={otdelka.src}
        />
        <InfoBlockMainPage
          textHeader="Проектирование"
          textDesc="Проектирование"
          cost={"от 50 000"}
          imgSrc={proektirovanie.src}
        />
        <InfoBlockMainPage
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

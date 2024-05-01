"use client";
import { useEffect } from "react";

import mainPageImage from "../../public/images/pool1.jpg";
import appearing from "@/tools/appearing";

const MainImg = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className="element-animation xl:container relative xl:h-[700px] lg:h-[400px]">
      <img
        src={mainPageImage.src}
        className="absolute  xl:pt-0 w-full xl:h-[700px] lg:h-[400px] sm:h-[250px]"
      />
      <div className="absolute text-white font-bold xl:ml-10 xl:text-6xl xl:mt-64 xl:w-[570px] lg:ml-4 lg:text-3xl lg:mt-36 lg:w-[280px] sm:w-[200px] sm:text-3xl sm:ml-2 sm:mt-10">
        Лучшие бассейны в Краснодаре
      </div>
      <div className="absolute text-white xl:ml-10 xl:text-2xl xl:mt-96 xl:w-[400px] lg:ml-4 lg:text-xl lg:mt-56 lg:w-[200px] sm:w-[200px] sm:text-xl sm:ml-2 sm:mt-40">
        По низким ценам
      </div>
      <div></div>
    </div>
  );
};

export default MainImg;

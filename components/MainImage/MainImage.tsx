"use client";
import { useEffect } from "react";

import mainPageImage from "../../public/images/pool1.jpg";
import appearing from "@/tools/appearing";

const MainImg = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className="element-animation h-[180px] sm:h-[200px] relative xl:w-[1200px] xl:h-[600px] lg:h-[400px] md:h-[270px] m-auto ">
      <img
        src={mainPageImage.src}
        className="absolute pt-0 container h-[180px] xl:h-[600px] lg:h-[400px] md:h-[270px] sm:h-[250px]"
      />
      <div
        className="absolute text-white font-bold mt-16 w-[150px] ml-4
      xl:ml-10 xl:text-6xl xl:mt-64 xl:w-[570px] 
      lg:ml-4 lg:text-3xl lg:mt-36 lg:w-[280px]
      md:ml-2 md:text-2xl md:mt-24 md:w-[280px] 
      sm:w-[200px] sm:text-3xl sm:ml-2 sm:mt-10"
      >
        Лучшие бассейны в Краснодаре
      </div>
      <div
        className="absolute text-white mt-28 ml-4
      xl:ml-10 xl:text-2xl xl:mt-96 xl:w-[400px] 
      lg:ml-4 lg:text-xl lg:mt-56 lg:w-[200px]
      md:ml-2 md:text-lg md:mt-34 md:w-[200px] 
      sm:w-[200px] sm:text-xl sm:ml-2 sm:mt-40"
      >
        По низким ценам
      </div>
      <div></div>
    </div>
  );
};

export default MainImg;

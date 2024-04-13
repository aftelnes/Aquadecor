"use client";
import { useEffect } from "react";

import mainPageImage from "../../../public/images/pool1.jpg";
import appearing from "@/tools/appearing";

const MainImg = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className="element-animation container relative h-[700px]">
      <img
        src={mainPageImage.src}
        className="absolute  pt-0 w-full h-[700px]"
      />
      <div className="absolute text-white font-bold ml-10 text-6xl mt-48 w-[400px]">
        Лучшие бассейны в Краснодаре
      </div>
      <div className="absolute text-white ml-11 text-2xl mt-96 w-[400px]">
        По низким ценам
      </div>
      <div></div>
    </div>
  );
};

export default MainImg;

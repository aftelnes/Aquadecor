"use client";
import { useEffect } from "react";

import appearing from "@/tools/appearing";

import beton1 from "../../../public/images/Pages/concrete_pool/beton1.jpg";
import beton2 from "../../../public/images/Pages/concrete_pool/beton2.jpg";
import beton3 from "../../../public/images/Pages/concrete_pool/beton3.jpeg";

const ConcretePools = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className="block w-full  mt-1 m-auto bg-mainColor pt-5 sm:w-full md:container lg:container xl:container mb-11">
      <hr className="border-1 border-black" />
      <h1 className="text-animation text-5xl mt-11 mb-16 text-center">
        Бетонные бассейны
      </h1>

      <div className="element-animation flex w-full mb-5  shadow-2xl shadow-gray-300">
        <img src={beton1.src} className="w-[750px]" />
        <p className="ml-9">Здесь будет текст</p>
      </div>
      <div className="element-animation flex w-full mb-5  shadow-2xl shadow-gray-300">
        <p>Здесь будет текст</p>
        <img src={beton2.src} className="w-[750px] ml-auto" />
      </div>
      <div className="element-animation flex w-full mb-5  shadow-2xl shadow-gray-300">
        <img src={beton3.src} className="w-[750px]" />
        <p className="ml-9">Здесь будет текст</p>
      </div>
    </div>
  );
};
export default ConcretePools;

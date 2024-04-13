"use client";
import { useEffect } from "react";

import appearing from "@/tools/appearing";

import pump from "../../../public/images/Pages/pumps/pump.jpg";
import pump2 from "../../../public/images/Pages/pumps/pump2.jpg";
import pump3 from "../../../public/images/Pages/pumps/pump3.jpeg";

const Pumps = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className="block w-full  mt-1 m-auto bg-mainColor pt-5 sm:w-full md:container lg:container xl:container mb-11">
      <hr className="border-1 border-black" />
      <h1 className="text-animation text-5xl mt-11 mb-16 text-center">
        Насосы для бассейна
      </h1>

      <div className="element-animation flex w-full mb-5  shadow-2xl shadow-gray-300">
        <img src={pump.src} className="w-[750px]" />
        <p className="ml-9">Здесь будет текст</p>
      </div>
      <div className="element-animation flex w-full mb-5  shadow-2xl shadow-gray-300">
        <p>Здесь будет текст</p>
        <img src={pump2.src} className="w-[750px] ml-auto" />
      </div>
      <div className="element-animation flex w-full mb-5  shadow-2xl shadow-gray-300">
        <img src={pump3.src} className="w-[750px]" />
        <p className="ml-9">Здесь будет текст</p>
      </div>
    </div>
  );
};
export default Pumps;

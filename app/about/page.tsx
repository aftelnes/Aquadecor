"use client";
import { useEffect } from "react";

import main_img from "../../public/images/about_us_main_img.jpg";
import appearing from "@/tools/appearing";

const AboutUs = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className="element-animation block w-full h-dvh mt-1 m-auto bg-mainColor pt-5 sm:w-full md:container lg:container xl:container">
      <hr className="border-1 border-black mb-2" />
      <div className="relative h-[700px] shadow-xl shadow-grey-300">
        <img
          src={main_img.src}
          className="h-[700px] w-[1550px] absolute shadow-xl shadow-grey-300"
        />
        <div className="absolute w-full h-[600px]  bg-black opacity-45 mt-11"></div>
        <p className="absolute text-white mt-20 text-3xl w-[1000px] ml-[225px]">
          Мы уже много лет занимаемся строительством бассейнов под ключ, а так
          же продажей оборудования. Наши услуги сочетают в себе максимальное
          качество, быстроту исполнения и многолетний опыт работы...
        </p>
      </div>
    </div>
  );
};
export default AboutUs;

"use client";
import { useEffect } from "react";

import main_img from "../../public/images/about_us_main_img.jpg";
import appearing from "@/tools/appearing";

import pageStyle from "@/styles/pageStyles/pageStyle";

const AboutUs = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className={pageStyle.pageStyle}>
      <hr className={pageStyle.pageHr} />
      <div
        className="relative flex element-animation shadow-xl shadow-grey-300 mb-10 m-auto container mt-5
        h-[200px] justify-center
      xl:h-[600px]
      lg:h-[450px]
      md:h-[400px]"
      >
        <img
          src={main_img.src}
          className="absolute shadow-xl h-[200px] container
          xl:h-[600px] xl:w-full 
          lg:h-[450px] lg:w-full 
          md:h-[400px] md:w-full"
        />
        <div
          className="absolute w-full bg-black opacity-45 h-[200px] container
        xl:h-[600px]
        lg:h-[450px]
        md:h-[400px]"
        ></div>
        <p
          className="absolute text-white mt-2 container w-10/12 text-sm
        xl:text-3xl xl:w-[900px] xl:mt-20 
        lg:text-2xl lg:w-[800px] lg:mt-16 
        md:text-xl md:w-[650px] md:mt-14
        "
        >
          Мы уже много лет занимаемся строительством бассейнов под ключ, а так
          же продажей оборудования. Наши услуги сочетают в себе максимальное
          качество, быстроту исполнения и многолетний опыт работы...
        </p>
      </div>
    </div>
  );
};
export default AboutUs;

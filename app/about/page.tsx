"use client";
import { useEffect } from "react";

import main_img from "../../public/images/about_us_main_img.jpg";
import appearing from "@/tools/appearing";

import sectionStyle from "@/styles/sectionStyle/sectionStyle";

const AboutUs = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div
      className="block w-full mt-1 m-auto pt-5 xl:w-[1200px] 
    lg:container lg:mb-10
    md:container md:mb-10
    sm:w-full  "
    >
      <hr className={sectionStyle.sectionHr} />
      <div
        className="relative element-animation shadow-xl shadow-grey-300
      xl:h-[600px]
      lg:h-[450px]
      md:h-[400px]"
      >
        <img
          src={main_img.src}
          className="absolute shadow-xl shadow-grey-300 
          xl:h-[600px] xl:w-full 
          lg:h-[450px] lg:w-full
          md:h-[400px] md:w-full"
        />
        <div
          className="absolute w-full bg-black opacity-45
        xl:h-[600px]
        lg:h-[450px]
        md:h-[400px]"
        ></div>
        <p
          className="absolute text-white mt-20 
        xl:text-3xl xl:w-[900px] xl:ml-[150px]
        lg:text-2xl lg:w-[800px] lg:ml-[50px]
        md:text-xl md:w-[700px] md:ml-[50px]
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

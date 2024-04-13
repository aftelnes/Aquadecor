"use client";
import { useEffect } from "react";

// import "../../../animation.css";
import appearing from "@/tools/appearing";

import img1 from "../../public/images/our_works/img1.jpeg";
import img2 from "../../public/images/our_works/img2.jpg";
import img3 from "../../public/images/our_works/img3.jpg";
import img4 from "../../public/images/our_works/img4.jpg";
import img5 from "../../public/images/our_works/img5.jpg";
import img6 from "../../public/images/our_works/img6.jpeg";
import img7 from "../../public/images/our_works/img7.jpg";
import img8 from "../../public/images/our_works/img8.jpg";
import img9 from "../../public/images/our_works/img9.jpg";
import img10 from "../../public/images/our_works/img10.jpg";

const imgStyle =
  "w-[300px] h-[300px] hover:scale-125 transition duration-700 delay-100 ease-in-out";

const OurWorks = () => {
  useEffect(() => {
    appearing();
  });

  return (
    <div className="element-animation">
      <h1 className="text-animation mb-16">Наши работы</h1>
      <div className="grid grid-rows-2 grid-flow-col gap-1 mb-24">
        <img src={img1.src} className={imgStyle} />
        <img src={img2.src} className={imgStyle} />
        <img src={img3.src} className={imgStyle} />
        <img src={img4.src} className={imgStyle} />
        <img src={img5.src} className={imgStyle} />
        <img src={img6.src} className={imgStyle} />
        <img src={img7.src} className={imgStyle} />
        <img src={img8.src} className={imgStyle} />
        <img src={img9.src} className={imgStyle} />
        <img src={img10.src} className={imgStyle} />
      </div>
    </div>
  );
};

export default OurWorks;

"use client";
import { useEffect } from "react";

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

import OurWorksBlock from "./OurWorksBlock";

const OurWorksMainPage = () => {
  useEffect(() => {
    appearing();
  });

  return (
    <div
      className="element-animation 
    xl:h-[900px] xl:w-[1200px]
    lg:h-[600px]
    md:h-[400px]
    "
    >
      <OurWorksBlock
        images={[
          img1.src,
          img2.src,
          img3.src,
          img4.src,
          img5.src,
          img6.src,
          img7.src,
          img8.src,
          img9.src,
          img10.src,
        ]}
        header="Наши работы"
      />
    </div>
  );
};

export default OurWorksMainPage;

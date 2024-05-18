"use client";
import { useEffect } from "react";

import appearing from "@/tools/appearing";
import pageStyle from "@/styles/pageStyles/pageStyle";

const div: string =
  "element-animation m-auto rounded shadow-xl shadow-gray-300\
   xl:pt-4 xl:h-[80px] xl:w-[800px] xl:mb-8\
   lg:pt-4 lg:h-[60px] lg:w-[600px] lg:mb-6\
   md:pt-4 md:h-[60px] md:w-[500px] md:mb-4";
const p: string = "text-center xl:text-2xl lg:text-lg";

const Contacts = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className={pageStyle.pageStyle}>
      <hr className={pageStyle.pageHr} />
      <h1 className={pageStyle.pageH1}>Контакты</h1>
      <div className={div}>
        <p className={p}>Наш адрес: г. Краснодар ул.Уличная д.120</p>
      </div>
      <div className={div}>
        <p className={p}>Контактный телефон: +7(777)-777-777-77</p>
      </div>
      <div className={div}>
        <p className={p}>WhatsApp: +7(777)-777-777-77</p>
      </div>
      <div className={div}>
        <p className={p}>ИП: Иванов Иван Иванович</p>
      </div>
      <div className={div}>
        <p className={p}>ОГРН: х-хх-хх-хх-ххххх-х</p>
      </div>
    </div>
  );
};

export default Contacts;

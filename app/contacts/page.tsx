"use client";
import { useEffect } from "react";

import appearing from "@/tools/appearing";

const div: string =
  "text-2xl element-animation m-auto mt-5 h-20 rounded shadow-xl shadow-gray-300 w-2/3 pt-4";
const p: string = "text-center";

const Contacts = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className="block w-full mt-1 m-auto bg-mainColor pt-5 sm:w-full md:container lg:container xl:container">
      <hr className="border-1 border-black" />
      <h1 className="text-animation m-auto text-center mt-5 text-4xl">
        Контакты
      </h1>
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

"use client";
import { useEffect } from "react";

import appearing from "@/tools/appearing";

import EquipmentItem from "@/components/InfoBlock/EquipmentItem";
import pic from "../../public/images/Pages/Pumps/pump3.jpeg";

const divStyle =
  "w-[1000px] h-[170px] m-auto mb-6 shadow-2xl shadow-grey-300 hover:shadow-cyan-300 rounded flex";

const ConcretePools = () => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className="block w-full  mt-1 m-auto bg-mainColor pt-5 sm:w-full md:container lg:container xl:container mb-11">
      <hr className="border-1 border-black" />
      <h1 className="text-animation text-5xl mt-11 mb-12 text-center">
        Оборудование
      </h1>
      <EquipmentItem img={pic.src} style={divStyle} />
      <EquipmentItem img={pic.src} style={divStyle} />
      <EquipmentItem img={pic.src} style={divStyle} />
    </div>
  );
};
export default ConcretePools;

"use client";
import { useEffect } from "react";

import appearing from "@/tools/appearing";

type WorkingWithUsItemProps = {
  text: string;
  header: string;
  img: string;
};

const WorkingWithUsItem = ({ text, header, img }: WorkingWithUsItemProps) => {
  useEffect(() => {
    appearing();
  });
  return (
    <div className="element-animation flex w-[750px] h-[200px] m-auto rounded shadow-xl shadow-gray-300 mb-7">
      <img className="w-[150px] h-[150px] mt-6 ml-2" src={img} />
      <div className="mt-6 ml-6">
        <h1 className="text-3xl mb-4">{header}</h1>
        <p className="text-xl">{text}</p>
      </div>
    </div>
  );
};

export default WorkingWithUsItem;

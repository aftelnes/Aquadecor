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
    <div
      className="element-animation flex m-auto rounded shadow-xl shadow-gray-300 mb-7
    xl:w-[750px] xl:h-[200px]  
    lg:w-[500px] lg:h-[150px]"
    >
      <img
        className="ml-2 
      xl:w-[150px] xl:h-[150px] xl:mt-6
      lg:w-[120px] lg:h-[120px] lg:mt-3"
        src={img}
      />
      <div
        className="xl:mt-6 xl:ml-6 
      lg:mt-3 lg:ml-4"
      >
        <h1
          className="font-medium
          xl:text-3xl xl:mb-4
        lg:text-2xl lg:mb-2"
        >
          {header}
        </h1>
        <p
          className="xl:text-xl 
        lg:text-lg lg:w-[350px]"
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default WorkingWithUsItem;

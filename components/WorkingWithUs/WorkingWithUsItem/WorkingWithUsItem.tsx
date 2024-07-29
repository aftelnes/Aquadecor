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
      className="element-animation flex m-auto mb-5 rounded shadow-xl w-64 shadow-gray-300
    xl:w-[550px] xl:h-[200px]  
    lg:w-[500px] lg:h-[170px]
    md:w-[350px] md:h-[135px]
    "
    >
      <img
        className="ml-2 w-[0px] h-[0px]
      xl:w-[150px] xl:h-[150px] xl:mt-6
      lg:w-[120px] lg:h-[120px] lg:mt-3
      md:w-[90px] md:h-[90px] md:mt-1
      "
        src={img}
      />
      <div
        className="
        xl:mt-6 xl:ml-6 xl:w-[350px] 
      lg:mt-3 lg:ml-4 lg:w-[350px] lg:pl-[5px]
      md:mt-1 md:ml-2 md:w-[230px] md:pl-[5px]
      "
      >
        <h1
          className="font-semibold mb-2
          xl:text-2xl xl:mb-4 xl:font-medium
        lg:text-xl lg:mb-2 lg:font-medium
        md:text-lg md:mb-1 md:font-medium
        "
        >
          {header}
        </h1>
        <p
          className="xl:text-lg 
        lg:text-lg
        md:text-sm 
        "
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default WorkingWithUsItem;

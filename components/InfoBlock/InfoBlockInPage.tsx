import React from "react";

type EquipmentItemProps = {
  img: string;
  header: string;
  text: string;
};

const InfoBlockInPage = ({ img, header, text }: EquipmentItemProps) => {
  return (
    <div
      className="relative element-animation shadow-2xl shadow-grey-300 hover:shadow-cyan-300 rounded flex m-auto mt-5 mb-5
      xl:w-[900px] xl:h-[200px]
      lg:w-[800px] lg:h-[200px]
      md:w-[650px] md:h-[200px]"
    >
      <img
        className="hover:scale-105 transition duration-700 delay-150 ease-in-out rounded
        xl:w-[300px] xl:h-[200px]
        lg:w-[300px] lg:h-[200px] 
        md:w-[270px] md:h-[200px]"
        src={img}
      />
      <div className="ml-2 mt-2 mb-2">
        <h1 className="font-medium xl:text-2xl xl:mb-1 lg:text-xl lg:mb-1 md:text-lg md:mb-0.5">
          {header}
        </h1>
        <div
          className="xl:w-[580px] xl:h-[120px] xl:text-lg 
        lg:w-[480px] lg:h-[120px] lg:text-base 
        md:w-[360px] md:h-[120px] md:text-sm"
        >
          {text}
        </div>
        <div className="text-right w-[110px] ml-auto rounded-full bg-cyan-300 mb-5 mr-2">
          <p className="text-center">от 100 000p</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBlockInPage;

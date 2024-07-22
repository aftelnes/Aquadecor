import React from "react";

type EquipmentItemProps = {
  img: string;
  header: string;
  text: string;
};

const InfoBlockInPage = ({ img, header, text }: EquipmentItemProps) => {
  return (
    <div
      className="relative element-animation shadow-2xl shadow-grey-300 
      hover:shadow-cyan-300 rounded flex m-auto mt-5 mb-5
      w-[340px] 
      xl:w-[900px] xl:h-[200px]
      lg:w-[800px] lg:h-[200px]
      md:w-[650px] md:h-[200px]"
    >
      <img
        className="transition duration-700 delay-150 ease-in-out rounded w-[150px] h-[120px]
        xl:w-[300px] xl:h-[200px] xl:hover:scale-105
        lg:w-[300px] lg:h-[200px] lg:hover:scale-105
        md:w-[270px] md:h-[200px] md:hover:scale-105"
        src={img}
      />
      <div
        className="ml-2
        xl:ml-2 xl:mt-2 xl:mb-2
        lg:ml-2 lg:mt-2 lg:mb-2
        md:ml-2 md:mt-2 md:mb-2"
      >
        <h1
          className="font-medium 
        xl:text-2xl xl:mb-1 
        lg:text-xl lg:mb-1 
        md:text-lg md:mb-0.5"
        >
          {header}
        </h1>
        <div
          className="text-xs w-[180px] h-[100px]
          xl:w-[580px] xl:h-[115px] xl:text-lg 
        lg:w-[480px] lg:h-[120px] lg:text-base 
        md:w-[360px] md:h-[125px] md:text-sm"
        >
          {text}
        </div>
        <div
          className="ml-auto rounded-full bg-cyan-300 w-[90px] mr-1 mb-2
        xl:w-[115px] xl:mb-5 xl:mr-1
        lg:w-[115px] lg:mb-5 lg:mr-1
        md:w-[110px] md:mb-5 md:mr-2"
        >
          <p className="text-center mt-2 text-xs xl:text-base lg:text-base md:text-sm">
            от 100 000p
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoBlockInPage;

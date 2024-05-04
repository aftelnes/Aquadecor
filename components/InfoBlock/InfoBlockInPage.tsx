import React from "react";

type EquipmentItemProps = {
  img: string;
  header: string;
  text: string;
};

const InfoBlockInPage = ({ img, header, text }: EquipmentItemProps) => {
  return (
    <div
      className="relative element-animation w-[1100px] h-[200px] m-auto mb-6 shadow-2xl shadow-grey-300 hover:shadow-cyan-300 rounded flex
    lg:w-[700px] lg:bg-gray-300"
    >
      <img
        className="hover:scale-105 transition duration-700 delay-150 ease-in-out w-[300px] h-[200px] rounded lg:w-"
        src={img}
      />
      <div className="ml-2 mt-2 mb-2">
        <h1 className="text-2xl mb-1">{header}</h1>
        <div className="w-[400]">{text}</div>
        <div className="text-right absolute mr-10 rounded-full bg-cyan-300 pr-3 pl-3 right-0 bottom-0 mb-5">
          <p>100 000p</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBlockInPage;

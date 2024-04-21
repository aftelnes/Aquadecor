import React from "react";

type EquipmentItemProps = {
  img: string;
  header: string;
  text: string;
};

const InfoBlockInPage = ({ img, header, text }: EquipmentItemProps) => {
  return (
    <div className="element-animation w-[1100px] h-[200px] m-auto mb-6 shadow-2xl shadow-grey-300 hover:shadow-cyan-300 rounded flex">
      <img
        className="hover:scale-105 transition duration-700 delay-150 ease-in-out w-[300px] h-[200px] rounded"
        src={img}
      />
      <h1>{header}</h1>
      <div>{text}</div>
    </div>
  );
};

export default InfoBlockInPage;

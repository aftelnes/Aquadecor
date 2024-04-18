import React from "react";

type EquipmentItemProps = {
  style: string;
  img: string;
};

const EquipmentItem = ({ style, img }: EquipmentItemProps) => {
  return (
    <div className={style}>
      <img
        className="hover:scale-105 transition duration-700 delay-150 ease-in-out w-[250px] h-[170px] rounded"
        src={img}
      />
      <div>помпом</div>
    </div>
  );
};

export default EquipmentItem;

type InfoBlockProps = {
  textHeader: string;
  textDesc: string;
  cost: string;
  imgSrc: string;
};

const InfoBlock = ({ textHeader, textDesc, cost, imgSrc }: InfoBlockProps) => {
  return (
    <div className="info-block mt-11 w-[450px] h-[520px] shadow-2xl shadow-grey-300 hover:shadow-cyan-300 rounded">
      <a href="/">
        <img
          className="hover:scale-105 transition duration-700 delay-150 ease-in-out w-[450px] h-[350px]"
          src={imgSrc}
        />
      </a>
      <a href="/">
        <h1 className="text-black text-2xl font-bold mt-4 mb-4 h-[20px] w-[430px] ml-[15px]">
          {textHeader}
        </h1>
        <p className="text-black text-xl  mb-12 h-[20px] w-[430px] ml-[15px]">
          {textDesc}
        </p>
        <p className="text-black text-xl font-bold  mb-4 h-[20px] w-[430px] ml-[15px]">
          {cost} р.
        </p>
      </a>
    </div>
  );
};

export default InfoBlock;

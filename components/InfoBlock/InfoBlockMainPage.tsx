type InfoBlockProps = {
  textHeader: string;
  textDesc: string;
  cost: string;
  imgSrc: string;
};

const InfoBlock = ({ textHeader, textDesc, cost, imgSrc }: InfoBlockProps) => {
  return (
    <div
      className="info-block mt-11 shadow-2xl shadow-grey-300 hover:shadow-cyan-300 rounded
      xl:w-[380px] xl:h-[440px]  
    lg:w-[300px] lg:h-[400px]
    md:w-[230px] md:h-[270px] md:mt-4
    "
    >
      <img
        className="hover:scale-105 transition duration-700 delay-150 ease-in-out 
        xl:w-[380px] xl:h-[270px]
        lg:w-[300px] lg:h-[250px]
        md:w-[230px] md:h-[180px]
        "
        src={imgSrc}
      />
      <a href="/">
        <h1
          className="text-black font-bold   
        xl:h-[20px] xl:w-[430px] xl:ml-[15px] xl:text-2xl xl:mt-4 xl:mb-4
        lg:text-xl lg:mb-2 lg:mt-4 lg:ml-[10px]
        md:text-base md:mb-1 md:mt-2 md:ml-[5px]
        "
        >
          {textHeader}
        </h1>
        <p
          className="text-black  
          xl:mb-12 xl:h-[20px] xl:w-[430px] xl:ml-[15px] xl:text-xl
        lg:mb-6 lg:text-lg lg:ml-[10px]
        md:mb-2 md:text-sm md:ml-[5px]
        "
        >
          {textDesc}
        </p>
        <p
          className="text-black font-bold 
          xl:mb-3 xl:h-[20px] xl:w-[430px] xl:ml-[15px] xl:text-xl
          lg:mb-2 lg:text-lg lg:ml-[10px]
          md:mb-1 md:text-sm md:ml-[5px]
        "
        >
          {cost} р.
        </p>
      </a>
    </div>
  );
};

export default InfoBlock;

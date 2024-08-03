type InfoBlockProps = {
  textHeader: string;
  cost: string;
  imgSrc: string;
};

const InfoBlock = ({ textHeader, cost, imgSrc }: InfoBlockProps) => {
  return (
    <div
      className="info-block mt-6 shadow-xl shadow-grey-200 hover:shadow-cyan-300 rounded bg-cyan-400
      w-[250px] h-[245px]
      xl:w-[380px] xl:h-[380px]  
      lg:w-[300px] lg:h-[350px]
      md:w-[230px] md:mt-4 md:h-[250px]
    "
    >
      <img
        className="    
        w-[250px] h-[180px]
        xl:w-[380px] xl:h-[270px] xl:hover:scale-105 xl:transition xl:duration-700 xl:delay-150 xl:ease-in-out 
        lg:w-[300px] lg:h-[250px] lg:hover:scale-105 lg:transition lg:duration-700 lg:delay-150 lg:ease-in-out 
        md:w-[230px] md:h-[180px] md:hover:scale-105 md:transition md:duration-700 md:delay-150 md:ease-in-out 
        "
        src={imgSrc}
      />
      <h1
        className="text-black font-bold ml-[10px]  mt-1
        xl:h-[20px] xl:w-[430px] xl:ml-[15px] xl:text-2xl xl:mt-4 xl:mb-8
        lg:text-xl lg:mb-2 lg:mt-4 lg:ml-[10px] lg:mb-4
        md:text-base md:mb-1 md:mt-2 md:ml-[5px]
        "
      >
        {textHeader}
      </h1>
      <div
        className="mr-auto rounded-full bg-cyan-300 w-[90px] ml-[10px]
        xl:w-[115px] xl:mb-5 xl:mr-1 xl:ml-[15px]
        lg:w-[115px] lg:mb-5 lg:mr-1 lg:ml-[10px]
        md:w-[110px] md:mb-5 md:mr-2 md:ml-[5px]
        "
      >
        <p className="text-center mt-2 text-xs xl:text-base lg:text-base md:text-sm">
          от 100 000p
        </p>
      </div>
      {/* <p
        className="text-black font-bold ml-[10px] mt-[5px] pb-[5px]
          xl:mb-3 xl:h-[20px] xl:w-[430px] xl:ml-[15px] xl:text-xl
          lg:mb-2 lg:text-lg lg:ml-[10px]
          md:mb-1 md:text-sm md:ml-[5px]
        "
      >
        {cost} р.
      </p> */}
    </div>
  );
};

export default InfoBlock;

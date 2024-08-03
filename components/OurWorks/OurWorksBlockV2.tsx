
type OurWorksProps = {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
};

const OurWorksBlockV2 = ({ img1, img2, img3, img4, img5 }: OurWorksProps) => {
  return (
    <div
      className="element-animation block shadow-2xl shadow-gray-300 m-auto mb-5 mt-5
    w-[340px] h-[410px]
    xl:w-[900px] xl:h-[480px] 
    lg:w-[800px] lg:h-[460px]
    md:w-[700px] md:h-[400px]"
    >
      <div className="flex">
        <img
          src={img1}
          className="w-[165px] h-[130px] xl:w-[400px] xl:h-[300px] lg:w-[350px] lg:h-[300px] md:w-[300px] md:h-[250px]"
          alt="Наши работы"
        />
        <p
          className="mt-1 ml-1 text-xs 
    xl:ml-9 xl:mt-2 xl:text-lg 
    lg:ml-6 lg:mt-2 lg:text-lg 
    md:ml-4 md:mt-1 md:text-base"
        >
          Здесь будет текст
        </p>
      </div>
      <div
        className="inline-grid grid-cols-2 gap-1 pt-[5px]
        w-[340px] h-[275px]
      xl:h-[180px] xl:w-[900px] xl:grid-cols-4 xl:gap-2
      lg:h-[160px] lg:w-[800px] lg:grid-cols-4 lg:gap-2
      md:h-[150px] md:w-[700px] md:grid-cols-4 md:gap-2  
      "
      >
        <img
          src={img2}
          className="w-[165px] h-[130px] xl:w-[225px] xl:h-[170px] lg:w-[195px] lg:h-[150px] md:w-[170px] md:h-[135px]"
          alt="Наши работы"
        />
        <img
          src={img3}
          className="w-[165px] h-[130px] xl:w-[225px] xl:h-[170px] lg:w-[195px] lg:h-[150px] md:w-[170px] md:h-[135px]"
          alt="Наши работы"
        />
        <img
          src={img4}
          className="w-[165px] h-[130px] xl:w-[225px] xl:h-[170px] lg:w-[195px] lg:h-[150px] md:w-[170px] md:h-[135px]"
          alt="Наши работы"
        />
        <img
          src={img5}
          className="w-[165px] h-[130px] xl:w-[225px] xl:h-[170px] lg:w-[195px] lg:h-[150px] md:w-[170px] md:h-[135px]"
          alt="Наши работы"
        />
      </div>
    </div>
  );
};

export default OurWorksBlockV2;

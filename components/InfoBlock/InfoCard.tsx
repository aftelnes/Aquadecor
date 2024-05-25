type InfoCardProps = {
  image: string;
  imageLocation: string;
  imageAlt: string;
};

const InfoCard = ({ image, imageLocation, imageAlt }: InfoCardProps) => {
  return (
    <>
      {imageLocation == "left" ? (
        <div
          className="element-animation flex shadow-2xl shadow-gray-300 m-auto mb-5 mt-5
          w-[320px] h-[150px]
          xl:w-[900px] xl:h-[300px] 
          lg:w-[800px] lg:h-[300px]
          md:w-[700px] md:h-[250px]"
        >
          <img
            src={image}
            className="w-[160px] h-[150px] xl:w-[450px] xl:h-[300px] lg:w-[400px] lg:h-[300px] md:w-[350px] md:h-[250px]"
            alt={imageAlt}
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
      ) : (
        <div
          className="element-animation flex mb-5 shadow-2xl shadow-gray-300 m-auto mb-5 mt-5
          w-[320px] h-[150px]
          xl:w-[900px] xl:h-[300px]
          lg:w-[800px] lg:h-[300px]
          md:w-[700px] md:h-[250px]"
        >
          <p className="mt-1 ml-1 text-xs xl:ml-9 xl:text-lg lg:ml-6 lg:text-lg md:ml-4 md:text-base">
            Здесь будет текст
          </p>
          <img
            src={image}
            className="ml-auto w-[160px] h-[150px] xl:w-[450px] xl:h-[300px] lg:w-[400px] lg:h-[300px] md:w-[350px] md:h-[250px]"
            alt={imageAlt}
          />
        </div>
      )}
    </>
  );
};

export default InfoCard;

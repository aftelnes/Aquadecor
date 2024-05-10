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
          className="element-animation flex mb-5 shadow-2xl shadow-gray-300 mb-10 mt-10 m-auto
        xl:w-[900px] xl:h-[300px] 
        lg:w-[800px] lg:h-[300px]
        md:w-[700px] md:h-[250px]"
        >
          <img
            src={image}
            className="xl:w-[450px] xl:h-[300px] lg:w-[400px] lg:h-[300px] md:w-[350px] md:h-[250px]"
            alt={imageAlt}
          />
          <p className="mt-2 xl:ml-9 lg:ml-6 md:ml-4">Здесь будет текст</p>
        </div>
      ) : (
        <div
          className="element-animation flex mb-5 shadow-2xl shadow-gray-300 mb-10 mt-10 m-auto
        xl:w-[900px] xl:h-[300px]
        lg:w-[800px] lg:h-[300px]
        md:w-[700px] md:h-[250px]"
        >
          <p className="mt-2 xl:ml-9 lg:ml-6 md:ml-4">Здесь будет текст</p>
          <img
            src={image}
            className="ml-auto xl:w-[450px] xl:h-[300px] lg:w-[400px] lg:h-[300px] md:w-[350px] md:h-[250px]"
            alt={imageAlt}
          />
        </div>
      )}
    </>
  );
};

export default InfoCard;

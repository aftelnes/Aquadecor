type InfoCardProps = {
  image: string;
  imageStyle: string;
  imageLocation: string;
  imageAlt: string;
};

const InfoCard = ({
  image,
  imageStyle,
  imageLocation,
  imageAlt,
}: InfoCardProps) => {
  return (
    <>
      {imageLocation == "left" ? (
        <div
          className="element-animation flex mb-5 shadow-2xl shadow-gray-300 
        xl:w-[1100px] xl:h-[350px]
        lg:w-[800px] lg:h-[300px]
        md:w-[700px] md:h-[250px]"
        >
          <img src={image} className={imageStyle} alt={imageAlt} />
          <p className="mt-2 xl:ml-9 lg:ml-6 md:ml-4">Здесь будет текст</p>
        </div>
      ) : (
        <div
          className="element-animation flex mb-5 shadow-2xl shadow-gray-300 
        xl:w-[1100px] xl:h-[350px]
        lg:w-[800px] lg:h-[300px]
        md:w-[700px] md:h-[250px]"
        >
          <p className="mt-2 xl:ml-9 lg:ml-6 md:ml-4">Здесь будет текст</p>
          <img src={image} className={imageStyle} alt={imageAlt} />
        </div>
      )}
    </>
  );
};

export default InfoCard;

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
        <div className="element-animation flex w-[1200px] mb-5 shadow-2xl shadow-gray-300">
          <img src={image} className={imageStyle} alt={imageAlt} />
          <p className="ml-9">Здесь будет текст</p>
        </div>
      ) : (
        <div className="element-animation flex w-[1200px] mb-5 shadow-2xl shadow-gray-300">
          <p className="ml-9">Здесь будет текст</p>
          <img src={image} className={imageStyle} alt={imageAlt} />
        </div>
      )}
    </>
  );
};

export default InfoCard;

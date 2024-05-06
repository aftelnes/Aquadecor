type OurWorksProps = {
  images: string[];
  header: string;
};
const imgStyle =
  "hover:scale-125 transition duration-700 delay-100 ease-in-out rounded xl:w-[300px] xl:h-[300px] lg:w-[200px] lg:h-[200px]";

const OurWorksBlock = ({ images, header }: OurWorksProps) => {
  return (
    <div className="element-animation">
      <h1 className="text-animation xl:mb-20 xl:text-5xl lg:text-4xl lg:mb-10">
        {header}
      </h1>
      <div className="grid grid-rows-2 grid-flow-col gap-1 ">
        {images.map((item) => (
          <img src={item} className={imgStyle} />
        ))}
      </div>
    </div>
  );
};

export default OurWorksBlock;

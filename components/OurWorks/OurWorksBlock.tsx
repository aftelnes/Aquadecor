type OurWorksProps = {
  images: string[];
  header: string;
};
const imgStyle =
  "hover:scale-125 transition duration-700 delay-100 ease-in-out rounded\
  xl:w-[250px] xl:h-[250px]\
  lg:w-[200px] lg:h-[200px]\
  md:w-[150px] md:h-[150px]";

const OurWorksBlock = ({ images, header }: OurWorksProps) => {
  return (
    <div
      className="element-animation h-auto m-auto 
    xl:w-[1200px] xl:mt-20 
    lg:container lg:mt-10 
    md:container md:mt-8 md:mb-10
    "
    >
      <h1 className="text-animation xl:text-5xl xl:mb-16 lg:mb-12 lg:text-4xl md:text-3xl md:mb-10">
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

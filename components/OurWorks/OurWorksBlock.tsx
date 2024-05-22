type OurWorksProps = {
  images: string[];
  header: string;
};
const imgStyle =
  "transition duration-700 delay-100 ease-in-out rounded\
  w-full h-full m-auto\
  xl:w-[250px] xl:h-[250px] xl:hover:scale-125\
  lg:w-[200px] lg:h-[200px] lg:hover:scale-125\
  md:w-[150px] md:h-[150px] md:hover:scale-125";

const OurWorksBlock = ({ images, header }: OurWorksProps) => {
  return (
    <div
      className="element-animation h-auto m-auto 
    xl:w-[1200px] xl:mt-20 
    lg:container lg:mt-10 
    md:container md:mt-8 md:mb-10
    "
    >
      <h1 className="text-animation text-2xl mb-6 mt-5 xl:text-5xl xl:mb-16 lg:mb-12 lg:text-4xl md:text-3xl md:mb-10">
        {header}
      </h1>
      <div
        className="grid grid-rows-2 grid-cols-2 gap-1
      xl:grid-rows-2 xl:grid-flow-col xl:gap-1
      lg:grid-rows-2 lg:grid-flow-col lg:gap-1
      md:grid-rows-2 md:grid-flow-col md:gap-1
      "
      >
        {images.map((item) => (
          <img src={item} className={imgStyle} />
        ))}
      </div>
    </div>
  );
};

export default OurWorksBlock;

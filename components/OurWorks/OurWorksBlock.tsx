type OurWorksProps = {
  images: string[];
  header: string;
};
const imgStyle =
  "w-[300px] h-[300px] hover:scale-125 transition duration-700 delay-100 ease-in-out rounded";

const OurWorksBlock = ({ images, header }: OurWorksProps) => {
  return (
    <div className="element-animation">
      <h1 className="text-animation mb-20">{header}</h1>
      <div className="grid grid-rows-2 grid-flow-col gap-1 ">
        {images.map((item) => (
          <img src={item} className={imgStyle} />
        ))}
      </div>
    </div>
  );
};

export default OurWorksBlock;

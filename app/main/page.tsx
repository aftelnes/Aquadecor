import AlsoWeDo from "@/components/AlsoWeDo/AlsoWeDo";
import MainImg from "@/components/MainImage/MainImage";
import Offers from "@/components/Offers/Offers";
import OurWorks from "@/components/OurWorks/OurWorks";
import WorkingWithUs from "@/components/WorkingWithUs/WorkingWithUs";

const Main = () => {
  return (
    <div className="container block w-full mt-1 m-auto bg-mainColor pt-5 sm:w-full md:container lg:container xl:container">
      <MainImg />
      <Offers />
      <AlsoWeDo />
      <WorkingWithUs />
      <OurWorks />
    </div>
  );
};
export default Main;

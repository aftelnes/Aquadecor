import AlsoWeDo from "@/components/AlsoWeDo/AlsoWeDo";
import MainImg from "@/components/MainImage/MainImage";
import Offers from "@/components/Offers/Offers";
import OurWorksMainPage from "@/components/OurWorks/OurWorksMainPage";
import WorkingWithUs from "@/components/WorkingWithUs/WorkingWithUs";

const Main = () => {
  return (
    <div className="container block w-full mt-1 m-auto bg-mainColor pt-5 sm:w-full md:container lg:container xl:container">
      <MainImg />
      <Offers />
      <AlsoWeDo />
      <WorkingWithUs />
      {/* <OurWorksMainPage /> */}
    </div>
  );
};
export default Main;

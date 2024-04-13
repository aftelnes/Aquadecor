import AlsoWeDo from "./alsowedo/page";
import MainImg from "./mainImage/page";
import Offers from "./offers/page";
import WorkingWithUs from "./workingwithus/page";

const Main = () => {
  return (
    <div className="container block w-full mt-1 m-auto bg-mainColor pt-5 sm:w-full md:container lg:container xl:container">
      <MainImg />
      <Offers />
      <AlsoWeDo />
      <WorkingWithUs />
    </div>
  );
};
export default Main;

import { Link } from "react-router-dom";
import banner from "../../../assets/images/newbanner.png";

const Banner = () => {
  return (
    <div className="md:container md:mx-auto mt-4 bg-[#F5F5F5] mx-2">
      <div className="flex flex-col md:flex-row items-center h-[300px] md:h-[80vh] px-4">
        <div>
          <h2 className="text-3xl lg:text-7xl text-blue-400 font-extrabold font-roboto text-center mt-4 md:mt-0">
            IGNITE YOUR PASSION FOR ROAD
          </h2>
          <div className="w-full mt-6 flex justify-center">
            <Link to="/learn_more">
              <button className="bg-blue-400 p-3 mx-auto rounded-md text-white font-semibold">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <img className="w-full md:w-1/2" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;

import { useLoaderData } from "react-router-dom";
import Brands from "../Brands/Brands";
import Banner from "../Shared/Banner/Banner";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="mt-16">
        <h2
          className="text-3xl font-bold
         text-sky-400 text-center"
        >
          Our Brands
        </h2>
        <Brands brands={brands}></Brands>
      </div>
    </div>
  );
};

export default Home;

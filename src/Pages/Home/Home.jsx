import { useLoaderData } from "react-router-dom";
import Brands from "../Brands/Brands";
import Banner from "../Shared/Banner/Banner";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="mt-16">
        <h2
          className="text-3xl md:text-7xl font-bold
         text-sky-400 text-center"
        >
          Our Brands
        </h2>
        <Brands brands={brands}></Brands>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;

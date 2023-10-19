import { useLoaderData } from "react-router-dom";
import Brands from "../Brands/Brands";
import Banner from "../Shared/Banner/Banner";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Brands brands={brands}></Brands>
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLoaderData } from "react-router-dom";
import Products from "../Products/Products";

// swiper js

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./css/style.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const BrandDetails = () => {
  const brandName = useLoaderData();
  const [products, setProducts] = useState([]);
  const { brand_name, slider1, slider2, slider3 } = brandName;
  const brand = brand_name;

  useEffect(() => {
    fetch(
      `https://velocity-drive-server-mb4xboy83-shakib-nibirs-projects.vercel.app/products/brand/${brand}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [products, brand]);
  return (
    <div className="container mx-auto px-4">
      <h2 className=" text-3xl md:text-7xl text-center mt-8 mb-8  font-bold">
        {brand}
      </h2>
      <h4 className="text-3xl  text-sky-400 font-bold">
        Feature Products of {brand}
      </h4>

      {products.length ? (
        <div className="grid grid-cols-4 gap-4 mt-8">
          {products?.map((product) => (
            <Products key={product._id} product={product}></Products>
          ))}
        </div>
      ) : (
        <div className="h-[600px] flex flex-col justify-center items-center border-2 border-red-200 text-center text-3xl space-y-4 drop-shadow-lg bg-[#FFFFFF]">
          <h2 className="text-red-400">NOTICE !!!</h2>
          <p className="text-xl">
            This feature is still at development stage. The featured products
            will be added soon. Meanwhile take a glimpse of what is coming at
            below or you can visit our other brands.
          </p>
          <Link to="/">
            <button className="bg-orange-400 p-4 text-white font-bold rounded-md">
              Go Back
            </button>
          </Link>
        </div>
      )}
      <div className="mt-20">
        <h2 className="text-3xl  text-sky-400 font-bold">Products Adverts</h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slider1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

BrandDetails.propTypes = {
  products: PropTypes.array,
};

export default BrandDetails;

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import Products from "../Products/Products";

const BrandDetails = () => {
  const brandName = useLoaderData();
  const [products, setProducts] = useState();
  const { brand_name } = brandName;
  const brand = brand_name;

  useEffect(() => {
    fetch(`http://localhost:5000/products/brand/${brand}`)
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
      <div className="grid grid-cols-4 gap-4 mt-8">
        {products?.map((product) => (
          <Products key={product._id} product={product}></Products>
        ))}
      </div>
    </div>
  );
};

BrandDetails.propTypes = {
  products: PropTypes.array,
};

export default BrandDetails;

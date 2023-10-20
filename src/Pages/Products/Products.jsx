import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  const { _id, name, photo, type, ratings, price } = product;
  return (
    <div className="drop-shadow-lg bg-[#FFFFFF] pt-4 pb-8 rounded-md px-2">
      <h2 className="text-2xl mt-4 font-bold text-orange-400 max-h-16 align-end">
        {name}
      </h2>
      <hr className="border-2 mb-4 mt-4 w-3/4" />
      <img className="w-full pt-4" src={photo} alt="" />
      <p className="font-bold text-xl mt-4 mb-5">Type: {type}</p>
      <p className="text-lg text-black mb-5">
        Price start @
        <span
          className="text-3xl font-bold
         text-sky-400 ml-2 mr-2"
        >
          {price}
        </span>
        USD
      </p>
      <p className="text-2xl text-red-500">
        Our Ratings :
        <span className="p-3 text-2xl text-black font-bold border-4 border-lime-400 rounded-full ml-32">
          {ratings}
        </span>
      </p>
      <p className="mt-16 text-right space-x-4 px-4">
        <Link to={`/products/${_id}`}>
          <button className="bg-orange-400 p-3 rounded-md text-white font-semibold">
            View Details
          </button>
        </Link>
        <button className="bg-blue-400 p-3 rounded-md text-white font-semibold">
          Update
        </button>
      </p>
    </div>
  );
};

Products.propTypes = {
  product: PropTypes.object,
};

export default Products;

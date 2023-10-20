import PropTypes from "prop-types";

const Products = ({ product }) => {
  console.log(product);
  const { name, photo, type, ratings, price } = product;
  return (
    <div className="drop-shadow-lg bg-[#FFFFFF] py-8 rounded-md px-2">
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
    </div>
  );
};

Products.propTypes = {
  product: PropTypes.object,
};

export default Products;

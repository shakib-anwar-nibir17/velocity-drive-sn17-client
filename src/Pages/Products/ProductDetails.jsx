import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const { photo, brand, name, price, ratings, type, details } = product;
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 px-4">
          <img className="w-full" src={photo} alt="" />
        </div>
        <div className="flex flex-col items-end px-4 pt-2 space-y-5 justify-center w-full md:w-1/3">
          <h1 className="text-5xl text-sky-400 font-bold">{brand}</h1>
          <h2 className="text-3xl text-orange-400 font-bold">{name}</h2>
          <p className="text-2xl font-bold">Type: {type}</p>
          <p className="text-4xl text-red-500 font-bold">$$ {price}</p>
          <p className="mb-3">
            Rated at
            <span className="p-3 text-2xl text-black font-bold border-4 border-lime-400 rounded-full md:ml-4">
              {ratings}
            </span>
          </p>
          <div className="pt-5">
            <button className="text-white bg-[#687EFF] p-3 rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 ">
        <h2 className="text-5xl text-black px-4 font-bold">Details</h2>
        <p className="text-justify text-2xl font-medium mt-5 px-4">{details}</p>
      </div>
    </div>
  );
};

export default ProductDetails;

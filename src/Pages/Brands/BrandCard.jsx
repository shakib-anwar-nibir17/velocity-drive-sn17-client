import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { _id, brand_image, brand_name } = brand;
  return (
    <div>
      <Link to={`/brands/${_id}`}>
        <img
          className="lg:hover:scale-110 duration-700 "
          src={brand_image}
          alt=""
        />
      </Link>
      <h2 className="text-center mt-8 bg-[#4D4C7D] text-white font-bold mb-4 py-3 w-1/2 mx-auto rounded-lg">
        {brand_name}
      </h2>
    </div>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object,
};

export default BrandCard;

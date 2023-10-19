import PropTypes from "prop-types";
import BrandCard from "./BrandCard";

const Brands = ({ brands }) => {
  console.log(brands);
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 container mx-auto mt-6 px-4">
        {brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;

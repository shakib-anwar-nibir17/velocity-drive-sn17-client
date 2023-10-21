import one from "../../../assets/images/1.png";
import two from "../../../assets/images/2.png";
import three from "../../../assets/images/3.png";
import four from "../../../assets/images/4.png";
import five from "../../../assets/images/5.png";
import six from "../../../assets/images/6.png";

const Services = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 container mx-auto px-4">
      <div>
        <img src={one} alt="" />
        <h2 className="text-3xl text-orange-400 font-bold text-center">
          Best Price
        </h2>
      </div>
      <div>
        <img src={two} alt="" />
        <h2 className="text-3xl text-orange-400 font-bold text-center">
          Online Service
        </h2>
      </div>
      <div>
        <img src={three} alt="" />
        <h2 className="text-3xl text-orange-400 font-bold text-center">
          Easy Payment with EMI
        </h2>
      </div>
      <div>
        <img src={four} alt="" />
        <h2 className="text-3xl text-orange-400 font-bold text-center">
          24/7 call service
        </h2>
      </div>
      <div>
        <img src={five} alt="" />
        <h2 className="text-3xl text-orange-400 font-bold text-center">
          2 year parts Guarantee
        </h2>
      </div>
      <div>
        <img src={six} alt="" />
        <h2 className="text-3xl text-orange-400 font-bold text-center">
          Fully Checked
        </h2>
      </div>
    </div>
  );
};

export default Services;

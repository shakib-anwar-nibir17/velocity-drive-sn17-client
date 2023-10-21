import review1 from "../../../assets/images/review1.jpg";
import review3 from "../../../assets/images/review33.jpg";
import review2 from "../../../assets/images/review2.jpg";
import review4 from "../../../assets/images/review4.jpg";
import Marquee from "react-fast-marquee";
const Review = () => {
  return (
    <Marquee>
      <div className="grid grid-cols-4 mt-10 container mx-auto px-4 gap-16">
        <div className="card w-[350px] bg-base-100 shadow-xl image-full">
          <figure>
            <img src={review1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Zooming into the Future</h2>
            <p>
              Velocity Drive has taken me on an incredible journey. Their cars
              are a perfect blend of style and performance. I feel like I am
              driving into the future every time I am behind the wheel.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-[#687EFF]">Amelia Velocity</button>
            </div>
          </div>
        </div>
        <div className="card w-[350px] bg-base-100 shadow-xl image-full">
          <figure>
            <img src={review4} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Elegance on Wheels</h2>
            <p>
              Velocity Drive offers the epitome of elegance in every car they
              produce. The attention to detail and the comfort of their vehicles
              are unmatched. It is not just a car; it is an experience.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-[#687EFF]">Max Wheeler</button>
            </div>
          </div>
        </div>
        <div className="card w-[350px] bg-base-100 shadow-xl image-full">
          <figure>
            <img src={review2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Unleash Your Inner Speedster</h2>
            <p>
              Velocity Drives sports cars are a dream come true for speed
              enthusiasts. The power, agility, and sleek design make me feel
              like a true speedster every time I hit the gas pedal.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-[#687EFF]">Sara Turbo</button>
            </div>
          </div>
        </div>
        <div className="card w-[350px] bg-base-100 shadow-xl image-full">
          <figure>
            <img src={review3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Green and Mean Machines</h2>
            <p>
              Velocity Drives commitment to eco-friendly options is truly
              commendable. Their range of hybrid and electric cars does not
              compromise on performance, proving that you can be green and mean
              on the road at the same time.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-[#687EFF]">Eco Warrior</button>
            </div>
          </div>
        </div>
      </div>
    </Marquee>
  );
};

export default Review;

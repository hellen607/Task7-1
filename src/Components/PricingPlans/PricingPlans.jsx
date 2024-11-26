import PricingCard from "../PricingCard/PricingCard";
import arrow from "./../../assets/images/pricingIcon1_2.svg";
import hand from "./../../assets/images/pricingShape1_1.webp";
import diamond from "./../../assets/images/pricingShape1_2.webp";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import "./PricingPlans.css";

export default function PricingPlans() {
  return (
    <div className="container my-5 text-center position-relative">
      <div className=" mb-4 w-100 services-titlte ">
        <p className="text-primary fw-bold">
          {" "}
          <IoIosArrowRoundBack /> OUR PRICING <IoIosArrowRoundForward />
        </p>
        <h2 className="fw-bold text-center">Our Awesome Pricing Plans</h2>
      </div>
      <img src={diamond} className="diamond position-absolute" alt="diamond" />
      <div className=" d-flex justify-content-center align-items-center flex-wrap mb-4">
        <div className="border plan-btn p-2 ">
          <button type="button" className="btn border Monthly">
            Monthly
          </button>
          <button type="button" className="btn border-0">
            Yearly
          </button>
        </div>
        <img src={arrow} alt="" className="ms-2" />
        <span className="text-primary ms-2">Save 25%</span>
      </div>

      <img src={hand} className="hand position-absolute " alt="hand-pointer" />

      <div className="row justify-content-center">
        <div className="col-md-4 mb-3 d-flex justify-content-center text-center">
          <PricingCard variant="second" />
        </div>
        <div className="col-md-4 mb-3 d-flex justify-content-center text-center">
          <PricingCard />
        </div>
        <div className="col-md-4 mb-3 d-flex justify-content-center text-center">
          <PricingCard variant="second" />
        </div>
      </div>
    </div>
  );
}

import "./Features.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FeaturesCard from "../FeaturesCard/FeaturesCard";
import feature1 from "./../../assets/images/blogThumb1_1.webp";
import feature2 from "./../../assets/images/blogThumb1_2.webp";
import feature3 from "./../../assets/images/blogThumb1_3.webp";
import avatar1 from "./../../assets/images/blogProfile1_2.webp";
import avatar2 from "./../../assets/images/blogProfile1_3.webp";
import avatar3 from "./../../assets/images/blogProfile1_1.webp";

export default function Features() {
  return (
    <section className="Features container py-5 ">
      <div className="featur-top d-flex justify-content-between align-items-center flex-wrap">
        <div className=" mb-4 services-titlte ">
          <p className="text-primary fw-bold">
            {" "}
            <IoIosArrowRoundBack /> OUR SERVICES <IoIosArrowRoundForward />
          </p>
          <h2 className="fw-bold">Elevating Businesses With IT Ingenuity</h2>
        </div>
        <div className="d-flex justify-content-end mb-3 ">
          <button className="btn btn-arrow rounded-circle shadow me-2">
            <FaArrowLeft />
          </button>
          <button className="btn btn-primary rounded-circle">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="FeaturesCards row">
        <div className="col-md-4">
          <FeaturesCard
            feature={feature2}
            category="Uncategorized"
            date="March 14, 2024"
            title="Best And Fastest Data Server Ever"
            authorName="Admin"
            authorRole="Co, Founder"
            avatar={avatar1}
          />
        </div>
        <div className="col-md-4">
          <FeaturesCard
            feature={feature3}
            category="Technology"
            date="March 29, 2024"
            title="Life Won’t One Beast Air Over Above All"
            authorName="Admin"
            authorRole="Co, Founder"
            avatar={avatar2}
          />
        </div>
        <div className="col-md-4">
          <FeaturesCard
            feature={feature1}
            category="Shared Host"
            date="March 24, 2024"
            title="Attentive Was Born In 2015 Help  Teams"
            authorName="Admin"
            authorRole="Co, Founder"
            avatar={avatar3}
          />
        </div>
      </div>
    </section>
  );
}

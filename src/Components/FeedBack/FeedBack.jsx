import "./FeedBack.css";
import image1 from "./../../assets/images/ctaThumb1_1.webp";
import wavy from "./../../assets/images/ctaShape1_1.webp";
import user1 from "./../../assets/images/testiThumb3_1.webp";
import user2 from "./../../assets/images/testiThumb3_2.webp";
import user3 from "./../../assets/images/testiThumb3_3.webp";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

export default function FeedBack() {
  return (
    <section className=" feedBack  ">
      <div className="container  ">
        <img src={wavy} className="wavy" alt="wavy" />
        <div className="experts d-flex ">
          <img src={image1} className="expert-img" alt="" />
          <div className=" mb-4 services-titlte ">
            <p className="text-white fw-bold">
              {" "}
              <IoIosArrowRoundBack /> CONTACT US <IoIosArrowRoundForward />
            </p>
            <h2 className="fw-bold text-white">
              24/7 Experts Hosting Support Our Customers Love
            </h2>
          </div>
          <button className="expert-btn border-0">
            TALK TO A SPECIALIST
            <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
      <div className="client-feedback ">
        <div className=" mb-4 title-feed ">
          <p className=" fw-bold text-primary">
            {" "}
            <IoIosArrowRoundBack /> OUR PRICING <IoIosArrowRoundForward />
          </p>
          <h2 className="fw-bold text-center">Our Latest Client Feedback</h2>
        </div>
        <div className="Feedback-Card container  ">
          <TestimonialCard
            name={"Kristin Watson"}
            field={"Web Designer"}
            desc={
              "  Extech has completely transformed our process. The user-friendly interface and powerful features maintaining our website. Highly recommended for all!"
            }
            imageSrc={user1}
            className="first-card"
          />
          <TestimonialCard
            name={"Thereso Webb"}
            field={"Tech Enthusiost"}
            desc={
              "  Extech has completely transformed our process. The user-friendly interface and powerful features maintaining our website. Highly recommended for all!"
            }
            imageSrc={user2}
            className="second-card dark-bg text-sec"
          />
          <TestimonialCard
            name={"Ronald Rechards"}
            field={"Web enterprenuor"}
            desc={
              "  Extech has completely transformed our process. The user-friendly interface and powerful features maintaining our website. Highly recommended for all!"
            }
            imageSrc={user3}
            className="third-card"
          />
        </div>
        <div className="shape">
          <div className="shape2"></div>
        </div>
      </div>
    </section>
  );
}

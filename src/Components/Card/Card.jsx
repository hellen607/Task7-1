import service1 from "./../../assets/images/serviceIcon1_1.svg";
import service2 from "./../../assets/images/serviceIcon1_2.svg";
import service3 from "./../../assets/images/serviceIcon1_3.svg";
import service4 from "./../../assets/images/serviceIcon1_4.svg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "./Card.css";

const servicesData = [
  {
    icon: service2,
    title: "Woo Commerce",
    description:
      "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.",
  },
  {
    icon: service3,
    title: "CRM Solutions",
    description:
      "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.",
  },
  {
    icon: service4,
    title: "Web Design",
    description:
      "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.",
  },
  {
    icon: service1,
    title: "Data Guard Sentinel",
    description:
      "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.",
  },
];

export default function Card() {
  return (
    <section className="container my-5 cards">
      <div className="featur-top d-flex justify-content-between flex-wrap align-items-center">
        <div className=" mb-4 services-titlte ">
          <p className="text-primary  fw-bold">
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
      <div className="row">
        {servicesData.map((service, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card h-100 ">
              <div className="card-body">
                <div className="icon-card mb-3 text-primary">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="border p-2"
                    width="50"
                    height="50"
                  />
                </div>
                <h5 className="card-title fw-bold">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <button className="btn border card-btn">
                  Read more <MdKeyboardDoubleArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

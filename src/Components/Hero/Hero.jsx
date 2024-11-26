import "./Hero.css";
// icons
import { TbActivityHeartbeat } from "react-icons/tb";
// images
import groupImg from "./../../assets/images/profileShape1_1.webp";
import person from "./../../assets/images/heroThumb1_1.webp";
import circle from "./../../assets/images/heroShape1_3.webp";
import wavy from "./../../assets/images/heroShape1_1.webp";

export default function Hero() {
  return (
    <section className="hero pt-5 ">
      <img src={wavy} className="position-absolute wavy" alt="" />
      <div className=" container  h-100 hero-container row">
        <div className="col-lg-6 col-md-6 col-sm-12 hero-left">
          <div>
            <div className="border text-center Heart my-2">
              <p>
                <TbActivityHeartbeat />
                Everything You Need To Create A Website
              </p>
            </div>
            <div className="hero-text">
              <h1 className="my-2">
                Business Innovation With IT Services Expertise
              </h1>
            </div>
            <div className="hero-list d-flex flex-wrap my-3">
              <ul className="list-unstyled me-4">
                <li>✓ Deployment and Support</li>
                <li>✓ Discovery and Analysis</li>
              </ul>
              <ul className="list-unstyled">
                <li>✓ Flexibility and Adaptability</li>
                <li>✓ Competitive Advantage</li>
              </ul>
            </div>
            <button className="border-0  hero-btn"> GET STARTED →</button>
          </div>
          <div className="hero-left-bottom">
            <div className="reviews py-3 mb-1 d-flex flex-wrap">
              <div className="pe-5 Trustpilot">
                <h3>Trustpilot</h3>
                <div>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={groupImg} alt="" />
                    <div>
                      <p>★★★</p>
                      <p>450+ reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Goolgle ps-5">
                <h3>Goolgle</h3>
                <div>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={groupImg} alt="" />
                    <div>
                      <p>★★★</p>
                      <p>450+ reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12  hero-right">
          <img src={person} className="person" alt="" />
        </div>
      </div>
      <div className="circle">
        <img src={circle} alt="" />
      </div>
    </section>
  );
}

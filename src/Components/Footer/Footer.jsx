import { useLocation } from "react-router-dom";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import Photo1 from "./../../assets/images/footerThumb1_1.webp";
import Photo2 from "./../../assets/images/footerThumb1_2.webp";
import Photo3 from "./../../assets/images/ctaThumb.webp";
import logo from "./../../assets/images/logo-white2.png";
import wavy from "./../../assets/images/ctaShape2_4 (1).webp";

export default function Footer() {
  const location = useLocation();
  const isAboutOrContact =
    location.pathname === "/About" || location.pathname === "/Contact";

  return (
    <footer className="text-light custom-footer position-relative ">
      <div className="container footer-main">
        {!isAboutOrContact && (
          <div className="footer-top d-flex justify-content-around align-items-center">
            <img src={wavy} className="wavy-footer" alt="" />
            <div>
              <img src={Photo3} className="footer-person" alt="person" />
            </div>
            <div className="footer-top-text w-50 d-flex justify-content-around flex-wrap">
              <div className="w-50">
                <h5>Stay Connected With Cutting Edge IT</h5>
              </div>
              <div>
                <button className="footer-btn">TALK TO A SPECIALIST →</button>
              </div>
            </div>
          </div>
        )}

        {isAboutOrContact && (
          <div className="footer-info-contact container my-5">
            <div className="info-container row mx-auto">
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="info-card d-flex">
                  <div className="icon">
                    <FaMapMarkerAlt size={24} color="#4070f4" />
                  </div>
                  <div className="info-content">
                    <h4>Address</h4>
                    <p>4648 Rocky Road Philadelphia PA</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="info-card d-flex">
                  <div className="icon">
                    <FaEnvelope size={24} color="#4070f4" />
                  </div>
                  <div className="info-content">
                    <h4>Send Email</h4>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info-card d-flex">
                  <div className="icon">
                    <FaPhoneAlt size={24} color="#4070f4" />
                  </div>
                  <div className="info-content">
                    <h4>Call Emergency</h4>
                    <p>+88 0123 654 99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="row footer-content">
          <div className="col-md-3 mb-4 lh-lg">
            <img src={logo} className="w-50" alt="logo" />
            <p>
              Extech IT is a Phasellus ultricies aliquam volutpat ullamcorper
              laoreet neque, a lacinia curabitur lacinia mollis.
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="text-light border p-1">
                <FaFacebookF />
              </a>
              <a href="#" className="text-light border p-1">
                <FaTwitter />
              </a>
              <a href="#" className="text-light border p-1">
                <FaYoutube />
              </a>
              <a href="#" className="text-light border p-1">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <div className="footer-line"></div>
            <ul className="list-unstyled lh-lg">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  <MdKeyboardDoubleArrowRight /> Extech About
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  <MdKeyboardDoubleArrowRight /> Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  <MdKeyboardDoubleArrowRight /> Our Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  <MdKeyboardDoubleArrowRight /> FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  <MdKeyboardDoubleArrowRight /> Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Recent Posts</h5>
            <div className="footer-line"></div>

            <ul className="list-unstyled">
              <li>
                <div className="d-flex align-items-start mb-2">
                  <img
                    src={Photo1}
                    alt="Post 1"
                    className="rounded me-2"
                    width="50"
                  />
                  <div>
                    <p className="small mb-0">
                      <MdOutlineCalendarMonth />
                      15th April, 2024
                    </p>
                    <p className="mb-0">
                      Top 5 Most Famous Technology Trend In 2024
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-start">
                  <img
                    src={Photo2}
                    alt="Post 2"
                    className="rounded me-2"
                    width="50"
                  />
                  <div>
                    <p className="small mb-0">
                      <MdOutlineCalendarMonth />
                      20th June, 2024
                    </p>
                    <p className="mb-0">The Surfing Man Will Blow Your Mind</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <div className="footer-line"></div>

            <p>
              <i className="bi bi-envelope"></i>
              <MdEmail />
              info@example.com
            </p>
            <p>
              <i className="bi bi-telephone"></i>
              <FaPhone />
              +208-6666-0112
            </p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your email address"
              />
              <button className="btn btn-primary">→</button>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="privacyPolicy"
              />
              <label className="form-check-label">
                I agree to the{" "}
                <a href="#" className="text-light">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-around pt-1 flex-wrap w-100 bottom-footer">
        <div>
          <p className="">&copy; All Copyright 2024 by Extech</p>
        </div>

        <div>
          <a href="#" className="text-light me-3 text-decoration-none">
            Terms & Condition
          </a>
          <a href="#" className="text-light text-decoration-none">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

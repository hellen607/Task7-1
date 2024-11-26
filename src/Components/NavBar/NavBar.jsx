import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowRight, FaSearch, FaShoppingCart } from "react-icons/fa";

import logo from "./../../assets/images/logo.svg";
import plane from "./../../assets/images/plane.webp";
import "./NavBar.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Navbar() {
  const location = useLocation();
  const isSpecialPage =
    location.pathname === "/About" || location.pathname === "/Contact";
  const isHomePage = location.pathname === "/";

  const [bgColor, setBgColor] = useState("#fff");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("#C3C8FF");
      } else {
        setBgColor("#fff");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`position-relativ navbar navbar-expand-lg navbar-light ${
        isSpecialPage ? "special-navbar" : "CustomNav"
      }`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="container d-flex align-items-center ">
        <div className="d-flex align-items-center">
          {isSpecialPage && (
            <img src={plane} alt="Image" height="30" className="me-2 plan" />
          )}
          <Link className="navbar-brand" to="/">
            <img src={logo} className="logo" alt="Logo" height="30" />
          </Link>
        </div>

        <div className="d-flex align-items-center hd-nav">
          <button
            className="navbar-toggler border-0 toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Pages
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>

          <Link to="/" className="btn search me-2">
            <FaSearch />
          </Link>
          {isHomePage && (
            <Link to="/" className="btn shopping-cart me-2">
              <FaShoppingCart />
            </Link>
          )}
          <div className="d-flex align-items-center left-blue-navbar">
            <div className="special-btn-wrapper">
              <button className="NavBtn btn">
                <Link to="/" className="text-decoration-none text-white ">
                  GET A QUOTE <FaArrowRight />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

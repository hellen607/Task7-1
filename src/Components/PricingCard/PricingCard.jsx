import "./PricingCard.css";
import { GiCheckMark } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { RxQuestionMarkCircled } from "react-icons/rx";

import cloud from "./../../assets/images/pricingIcon1_1.svg";

export default function PricingCard({ variant }) {
  return (
    <div
      className={`PricingCard border rounded p-3 ${
        variant === "second" ? "second-style" : ""
      }`}
    >
      <div>
        <div className="card-top d-flex justify-content-between text-white p-2 rounded mb-3 ">
          <div>
            <h5>Regular Plan</h5>
            <h3>
              $49<span className="fs-5">/Month</span>
            </h3>
          </div>
          <img src={cloud} alt="Plan Icon" className="img-fluid   me-3 w-25" />
        </div>

        <ul className="list-unstyled text-start lh-lg">
          <li className="d-flex align-items-center">
            <GiCheckMark className="text-primary" />
            <span className="ms-2 flex-grow-1">100 GB SSD Storage</span>
            <RxQuestionMarkCircled className="ms-auto" />
          </li>
          <li className="d-flex align-items-center">
            <GiCheckMark className="text-primary" />
            <span className="ms-2 flex-grow-1">Weekly Backups</span>
            <RxQuestionMarkCircled className="ms-auto" />
          </li>
          <li className="d-flex align-items-center">
            <GiCheckMark className="text-primary" />
            <span className="ms-2 flex-grow-1">Unlimited Free SSL</span>
            <RxQuestionMarkCircled className="ms-auto" />
          </li>
          <li className="d-flex align-items-center">
            <GiCheckMark className="text-primary" />
            <span className="ms-2 flex-grow-1">24/7 System Monitoring</span>
            <RxQuestionMarkCircled className="ms-auto" />
          </li>
          <li className="d-flex align-items-center">
            <GiCheckMark className="text-primary" />
            <span className="ms-2 flex-grow-1">Free Domain ($9.99 Value)</span>
            <RxQuestionMarkCircled className="ms-auto" />
          </li>
          <li className="d-flex align-items-center">
            <FaTimes className="text-danger" />
            <span className="ms-2 flex-grow-1">Frame 164236</span>
            <RxQuestionMarkCircled className="ms-auto" />
          </li>
          <li className="d-flex align-items-center">
            <FaTimes className="text-danger" />
            <span className="ms-2 flex-grow-1">20+ Payment Methods</span>
            <RxQuestionMarkCircled className="ms-auto" />
          </li>
        </ul>

        <button className="btn card-plan-btn py-2 w-100 mt-3 border">
          GET STARTED NOW →
        </button>
      </div>
    </div>
  );
}

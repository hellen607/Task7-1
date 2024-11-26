import "./Companies.css";
import brand1 from "./../../assets/images/brandLogo1_1.svg";
import brand2 from "./../../assets/images/brandLogo1_2.svg";
import brand3 from "./../../assets/images/brandLogo1_3.svg";
import brand4 from "./../../assets/images/brandLogo1_4.svg";
import brand5 from "./../../assets/images/brandLogo1_5.svg";

export default function Companies() {
  return (
    <div className="brands  d-flex justify-content-center align-items-center flex-wrap border-bottom">
      <img src={brand1} className="brand" alt="brand" />
      <img src={brand2} className="brand" alt="brand" />
      <img src={brand3} className="brand" alt="brand" />
      <img src={brand4} className="brand" alt="brand" />
      <img src={brand5} className="brand" alt="brand" />
    </div>
  );
}

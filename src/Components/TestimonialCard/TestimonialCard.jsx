import { FaStar, FaStarHalfAlt, FaQuoteRight } from 'react-icons/fa';
import './TestimonialCard.css';

export default function TestimonialCard({ imageSrc, className, name, field, desc }) {
  return (
    <div className={`TestimonialCard bg-white p-3 ${className}`}>
      <div className="row">
        <div className="col-12 d-flex align-items-center mb-2">
          <FaStar color="#FFCC33" size={24} />
          <FaStar color="#FFCC33" size={24} />
          <FaStar color="#FFCC33" size={24} />
          <FaStar color="#FFCC33" size={24} />
          <FaStarHalfAlt color="#FFCC33" size={24} />
        </div>
        <div className="col-12">
          <p>{desc}</p>
        </div>
        <div className="col-3 d-flex align-items-center">
          <img
            src={imageSrc}
            className="rounded-circle"
            width="48"
            height="48"
            alt="User Avatar"
          />
        </div>
        <div className="col-7 d-flex flex-column justify-content-center">
          <strong>{name}</strong>
          <span>{field}</span>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-end">
          <FaQuoteRight color="#d1c4ff" size={32} />
        </div>
      </div>
    </div>
  );
};

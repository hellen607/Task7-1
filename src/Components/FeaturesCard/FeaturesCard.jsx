import { FaArrowRight } from 'react-icons/fa';
import './FeaturesCard.css';


export default function FeaturesCard({ category, date, title, authorName, authorRole, feature, avatar }) {
  return (
    <div className="FeaturesCard position-relative">
      <div className="FeaturesCard-bg">
        <img src={feature} className='feature' alt="feature" />
      </div>

      <div className="FeaturesCard-card card position-absolute shadow">
        <div className="card-body">
          <div className="d-flex justify-content-between mb-2">
            <span className="badge bg-light text-primary border  category">{category}</span>
            <span className="text-muted ">{date}</span>
          </div>
          <h5 className="card-title border-bottom pb-3">{title}</h5>
          <div className="d-flex align-items-center mt-4">
            <div className="FeaturesCard-avatar"><img src={avatar} className='m-2' alt="avatar" /></div>
            <div className="flex-grow-1">
              <p className="mb-0">{authorName}</p>
              <small className="text-muted">{authorRole}</small>
            </div>
            <div>
              <button className="btn border p-2">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

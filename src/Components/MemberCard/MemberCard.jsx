import { FaShareAlt } from "react-icons/fa";
import './MemberCard.css'


  

export default function MemberCard({ name, title, imageSrc }) {
    return (
        <div className="team-card">
        <img src={imageSrc} alt={name} className="team-card-image" />
        <div className="team-card-info position-relative">
          <h3 className="team-card-name">{name}</h3>
          <p className="team-card-title">{title}</p>
          <div className="team-card-icon ">
            <FaShareAlt  />
          </div>
        </div>
      </div>
    )
}


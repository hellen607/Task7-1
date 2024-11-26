import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <div className="contact-container">
      <div className="info-section">
        <div className=" ">
          <div className="info-item pb-3 border-bottom">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <p className="label">Call Us 7/24</p>
              <p className="value">+208-555-0112</p>
            </div>
          </div>
          <div className="info-item pb-3 border-bottom">
            <FaEnvelope className="contact-icon" />
            <div>
              <p className="label">Make a Quote</p>
              <p className="value">infotech@gmail.com</p>
            </div>
          </div>
          <div className="info-item ">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <p className="label">Location</p>
              <p className="value">4517 Washington ave.</p>
            </div>
          </div>
        </div>
        <div className="video-thumbnail">
          <iframe
            className="contact-video"
            src="https://www.youtube.com/embed/u10sRtSVzik?si=uLxpzpZClT2ePvVK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="form-section">
        <h2 className="heading">Ready to Get Started?</h2>
        <p className="description">
          Nullam varius, erat quis iaculis dictum, eros urna varius eros, ut
          blandit felis odio in turpis. Quisque rhoncus, eros in auctor
          ultrices,
        </p>
        <form className="form">
          <div className="input-group">
            <div className="name">
              <label htmlFor="">Your Name*</label>
              <input type="text" className="input" />
            </div>
            <div className="email">
              <label htmlFor="">Your Email*</label>
              <input type="email" className="input" />
            </div>
          </div>
          <label htmlFor="">Write Message*</label>
          <textarea className="textarea"></textarea>
          <button className="button">Send Message ➔</button>
        </form>
      </div>
    </div>
  );
}

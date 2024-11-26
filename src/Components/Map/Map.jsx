import "./Map.css";

export default function Map() {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.0003359380007!2d35.8041812243616!3d35.528989372636794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1526ada7c38f8879%3A0x5f66e4e99dbb7a47!2sfocal%20X%20agency!5e0!3m2!1sar!2sus!4v1732523083354!5m2!1sar!2sus"
        width="100%"
        height="100%"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

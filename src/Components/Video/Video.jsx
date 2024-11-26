import "./Video.css";
export default function Video() {
  return (
    <section className="video">
      <div className="container">
        <iframe
          className="video-iframe"
          src="https://www.youtube.com/embed/u10sRtSVzik?si=uLxpzpZClT2ePvVK"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="row container number-card px-4">
        <div className="col-md-3 text-left text-white">
          <p className="number">01</p>
          <h4>Requirment</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem enim
            quaerat natus minima culpa quisquam eos inventore accusamus
            temporibus! Cumque.{" "}
          </p>
        </div>
        <div className="col-md-3 text-left text-white">
          <p className="number two ">02</p>
          <h4>UI/UX Design</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem enim
            quaerat natus minima culpa quisquam eos inventore accusamus
            temporibus! Cumque.{" "}
          </p>
        </div>
        <div className="col-md-3 text-left text-white">
          <p className="number">03</p>
          <h4>Prototype</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem enim
            quaerat natus minima culpa quisquam eos inventore accusamus
            temporibus! Cumque.{" "}
          </p>
        </div>
        <div className="col-md-3 text-left text-white">
          <p className="number">04</p>
          <h4>Development</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem enim
            quaerat natus minima culpa quisquam eos inventore accusamus
            temporibus! Cumque.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

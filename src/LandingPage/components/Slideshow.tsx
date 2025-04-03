import "./Slideshow.css";

const Slideshow = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="./src/LandingPage/images/s1_superset.png"
            className="d-block w-100"
          />
          <div className="container-head">
            <h1>Focus on the training while we Focus on your business</h1>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <img
              src="./src/LandingPage/images/s2_superset.png"
              className="d-block w-100"
            />
            <h1>AI driven assistance</h1>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <img
              src="./src/LandingPage/images/s3_superset.png"
              className="d-block w-100"
            />
            <h1>Payment and Scheduling Solutions</h1>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slideshow;

{
  /* <div className="carousel-indicators">
<button
  type="button"
  data-bs-target="#myCarousel"
  data-bs-slide-to="0"
  className="active"
  aria-current="true"
  aria-label="Slide 1"
></button>
<button
  type="button"
  data-bs-target="#myCarousel"
  data-bs-slide-to="1"
  aria-label="Slide 2"
></button>
<button
  type="button"
  data-bs-target="#myCarousel"
  data-bs-slide-to="2"
  aria-label="Slide 3"
></button>
</div> */
}

{
  /* <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <h1>Exampe headline</h1>
            <p>welcome to ur momma!</p>
            <a href="#" className="btn btn-lg btn-primary">
              Sign up Today
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <h1>swapped</h1>
            <p>welcome to ur momma!</p>
            <a href="#" className="btn btn-lg btn-primary">
              Sign up Today
            </a>
          </div>
        </div>
      </div>
    </div> */
}

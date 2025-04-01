import NavBar from "./components/NavBar";
import Slideshow from "./components/Slideshow";
import "./components/Slideshow.css";

function LandingPage() {
  return (
    <>
      {/* //NavBar */}
      <div className="mb-3">
        <NavBar />
      </div>
      {/* // Image Slideshow */}
      <Slideshow />
    </>
  );
}

export default LandingPage;

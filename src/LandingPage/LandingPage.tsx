import NavBar from "./components/NavBar";
import Slideshow from "./components/Slideshow";
import "./components/Slideshow.css";

function LandingPage() {
  return (
    <>
      {/* //NavBar */}
      <div>
        <NavBar />
      </div>
      {/* // Image Slideshow */}
      <Slideshow />
    </>
  );
}

export default LandingPage;

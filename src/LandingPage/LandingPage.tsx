import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
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
      {/* Pricing */}
      <Pricing />
      {/* footer */}
      <Footer />
    </>
  );
}

export default LandingPage;

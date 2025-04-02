import "./Pricing.css";

function Pricing() {
  return (
    <>
      <div className="pricing-container">
        <div className="pricing-box">
          <h2>Free</h2>
          <div className="pricing-info">
            <ol>
              <li>Full Support</li>
            </ol>
          </div>
          <div className="pricing-button-box">
            <button className="pricing-button btn btn-dark">Click Here</button>
          </div>
        </div>
        <div className="pricing-box">
          <h2>Individual</h2>
          <div className="pricing-info">
            <ol>
              <li>Full Support</li>
            </ol>
          </div>
          <div className="pricing-button-box">
            <button className="pricing-button btn btn-dark">Click Here</button>
          </div>
        </div>

        <div className="pricing-box">
          <h2>Business</h2>
          <div className="pricing-info">
            <ol>
              <li>Full Support</li>
            </ol>
          </div>
          <div className="pricing-button-box">
            <button className="pricing-button btn btn-dark">Click Here</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;

import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Auto Trainer</a>
        <button className="btn btn-outline-success text-nowrap d-flex">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

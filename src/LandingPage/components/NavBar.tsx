import Button from './Button';
import './NavBar.css'



const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand nav-text">Auto Trainer</a>
          <button className="btn btn-sml btn-outline-light text-nowrap d-flex">
            Get Started
          </button>
        </div>
      </nav>
    </div>

  );
};

export default NavBar;

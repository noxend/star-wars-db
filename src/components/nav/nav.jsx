import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className='container'>
      <Link className="navbar-brand" to="/">
        SW DB
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/vehicle/" className="nav-link">
              Vehicles
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/person/" className="nav-link">
              Characters
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/planets/" className="nav-link">
              Planets
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Nav;

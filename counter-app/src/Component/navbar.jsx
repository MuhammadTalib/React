import React from "react";

const Navbar = ({ totalCounters }) => {
  console.log("Navbar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-secondary badge-pill">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;

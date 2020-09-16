import React from "react";
import "./navbar.css"

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="navbar-brand">
      <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
        <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
          {totalCounters}
        </span>
        Items
      </div>
    </nav>
  );
};

export default NavBar;

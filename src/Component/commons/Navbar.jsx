import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/logo.png";
import "./app.css";

export const NavBar = (props) => {
  return (
    <Fragment>
      <nav>
        <img className="logo" src={image} alt="logo" />
        {props.pages &&
          props.pages.map((pages, index) => {
            return (
              <Link key={index} to={pages.to}>
                {" "}
                {pages.nom}{" "}
              </Link>
            );
          })}
      </nav>
    </Fragment>
  );
};

export default NavBar;
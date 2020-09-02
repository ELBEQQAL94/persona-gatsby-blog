import React from "react";
import { Link } from "gatsby";

// Styles
import "./RightContainer.scss";

const RightContainer = () => {
  return (
    <div className="right__container">
      <ul className="links">
        <li className="links__item">
          <Link to="/">blog</Link>
        </li>
        <li className="links__item">
          <Link to="/projects">projects</Link>
        </li>
        <li className="links__item">
          <Link to="/about">about</Link>
        </li>
      </ul>
    </div>
  );
};

export default RightContainer;

import React from "react";
import { Link } from "gatsby";

// Types
import PropTypes from "prop-types";

// Styles
import "./LeftContainer.scss";

const LeftContainer = ({urlImg}) => {
  return (
    <div className="left__container">
      <Link to="/">
        <img
          className="logo__img"
          src={urlImg}
          alt="logo"
          title="logo"
        />
      </Link>
      <div className="full_name">
        <h2>youssef elbeqqal</h2>
        <p>full stack developer</p>
      </div>
    </div>
  );
};

LeftContainer.propTypes = {
  urlImg: PropTypes.string.isRequired,
};

export default LeftContainer;

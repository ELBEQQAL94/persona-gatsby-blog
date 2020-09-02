import React from "react";
import { Link } from "gatsby";

// Types
import PropTypes from "prop-types"

// Styles
import "./Pagination.scss";

const Pagination = ({
  isFirst,
  isLast,
  nextPage,
  prevPage
}) => {
  return (
    <div className="pagination">
      <div className="prev__page">
        <Link to={prevPage}>Prev</Link>
      </div>
      <div className="next__page">
        <Link to={nextPage}>Next</Link>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  nextPage: PropTypes.number.isRequired,
  prevPage: PropTypes.number.isRequired,
}

export default Pagination;

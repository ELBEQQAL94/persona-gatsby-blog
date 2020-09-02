import React from "react";
import { graphql } from "gatsby";
import { Post } from "../components";

// Types
//import PropTypes from "prop-types"

// Components
import { Pagination } from "../components";

const allPosts = ({ contextPage, data }) => {

  const {currentPage, numPages} = contextPage;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`;
  const nextPage = `/${currentPage + 1}`;
  const posts = data.allMdx.edges;

  return (
    <div className="all__posts">
      <h1>All Posts!</h1>
    </div>
  );
};



export default allPosts;

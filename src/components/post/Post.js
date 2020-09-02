import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

// Styles
import "./Post.scss";

const Post = ({title, excerpt, featureImage, path }) => (
  <Link to={path}>
    <div className="post">
      <div className="main__title">
        <h2>{title}</h2>
        <p>{excerpt}</p>
      </div>
      <div className="thumbnail_container">
        <Img fixed={featureImage} />
      </div>
    </div>
  </Link>
)

export default Post;

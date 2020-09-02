import React from "react";

const Post = ({title, excerpt}) => (
  <div className="post">
    <h2>{title}</h2>
    <p>{excerpt}</p>
  </div>
)

export default Post;

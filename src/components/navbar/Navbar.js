import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

// Components
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

// Styles
import "./Navbar.scss";

const Navbar = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
        }
      }
      logo: file(relativePath: {eq: "gatsby-icon.jpeg"}) {
        publicURL
      }
    }
  `);

  const {author, title} = data.site.siteMetadata;

  return (
    <nav className="nav">
        <div className="nav__container">
          <LeftContainer
            urlImg={data.logo.publicURL}
            author={author}
            title={title}
          />
          <RightContainer />
        </div>
    </nav>
  );
};

export default Navbar;

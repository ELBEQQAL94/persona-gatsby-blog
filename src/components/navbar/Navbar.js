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
      logo: file(relativePath: {eq: "gatsby-icon.jpeg"}) {
        publicURL
      }
    }
  `);

  return (
    <nav className="nav">
      <LeftContainer urlImg={data.logo.publicURL} />
      <RightContainer />
    </nav>
  );
};

export default Navbar;

import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout"

const About = ({data}) => {
  return (
    <Layout>
      <h2>About page!</h2>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default About;

import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../components/layout"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            date
          }
        }
      }
    }`
  );


  return (
    <Layout>
      <div>
      <h4>Posts</h4>
      {
        data.allMdx.nodes.map(({frontmatter}) => (
          <>
            <Link to={`/${frontmatter.slug}`}>
              <h2 key={frontmatter.slug}>{frontmatter.title}</h2>
            </Link>
            <p>{frontmatter.date}</p>
          </>
        ))
      }
      </div>
    </Layout>
  );
};

export default IndexPage;

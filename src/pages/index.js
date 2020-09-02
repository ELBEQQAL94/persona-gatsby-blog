import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Post } from "../components";
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
            excerpt
            featureImage {
              childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
              }
            }
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
            <Post
              key={frontmatter.slug}
              title={frontmatter.title}
              path={`/${frontmatter.slug}`}
              excerpt={frontmatter.excerpt}
              featureImage={frontmatter.featureImage.childImageSharp.fixed}
            />
          ))
        }
      </div>
    </Layout>
  );
};

export default IndexPage;

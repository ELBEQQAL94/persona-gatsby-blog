import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"

export default function BlogPost({data}) {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed;
  return (
    <Layout>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <Img fixed={featureImage} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query MDXQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        excerpt
        date
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
`

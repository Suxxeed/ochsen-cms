import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Food from "../components/food"

import IntroPic from "../../content/assets/intro.jpg"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <Food />
      <img src={IntroPic} alt="Blick auf den Ochseneingang"/>
      <section>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h1>
                  <Link to={node.fields.slug}>{title}</Link>
                </h1>
                <small>{node.frontmatter.date}</small>
              </header>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

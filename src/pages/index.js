import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Food from "../components/food"
import Events from "../components/events"
import Button from "../components/button"

import TitleOchsen from "../../content/assets/titel_ochsen.svg"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <img src={TitleOchsen} alt="Museumsgasthof Ochsen" id="brand" />
      <div id="intro"></div>
      <section>
        <h2 className="centered"><span>A</span>ktuelles</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h4>
                  <Link to={node.fields.slug}>{title}</Link>
                </h4>
                // <small>{node.frontmatter.date}</small>
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
      <Food />
      <Events />
      <Button />
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

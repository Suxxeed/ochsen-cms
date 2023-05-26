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

      <div id="introtext"> 
        <section>
          <b>Sie würden gerne Freunde oder Verwandte einladen um gemeinsam etwas ganz Besonderes zu erleben und eine wundervolle Zeit zu verbringen?</b>
          <p>Kaffee & Kuchen, Familienfeier, Vereine, Seminare, Tagungen und Konzerte <br></br>
            Gebäude mit Stube, Ratsherrenzimmer, großer Saal & Terrasse</p>
          <p>Im Museumsgasthof Ochsen, 1519 erbaut, erleben Sie Ihr Feier, Konzert, Seminar in unverwechselbaren Räumen. Diese Räume stehen Ihnen mit allem dazugehörigen Equipment zur Miete zur Verfügung. Gerne tragen wir auf Wunsch vieles dazu bei. Von der Grundausstattung, <b>Dekoration, Mittelalterzelt, Oldtimer, großer Grill ( indu+), Gastrokonzept “Flambi-Spieß”, Live-Musiker uvm.</b></p>
          </section>

          <section>
          <p>Stube mit Kachelofen, Theke : <span>30 Plätze</span></p>
          <p>Ratsherrenzimmer mit Kachelofen, Renaissance: <span>20 Plätze</span></p>
          <p>Plätze großer Saal mit Terrasse : <span>80 Plätze</span></p>
        </section>
      </div>

      <section>
        <h2 className="centered">Aktuelles</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h4>
                  <Link to={node.fields.slug}>{title}</Link>
                </h4>
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

      <section id="catering">
        <h2>Unsere Catering-Partner</h2>
        <ul>
          <li><a href="https://www.stern-landgasthof.de" target="_blank"><h3>Landgasthof Stern Bühlertann</h3></a></li>
          <li><a href="https://www.eschenau-rose.de/" target="_blank"><h3>Restaurant Rose Eschenau</h3></a></li>
          <li><a href="https://www.landmetzgerei.de" target="_blank"><h3>Landmetzgerei Setzer, Frau Silvia Setzer</h3></a></li>
          <li><a href="https://www.metzgerei-spriegel.de/catering" target="_blank"><h3>Metzgerei und Partyservice Harald Schäfer, Frau Stark, Frau Spriegel</h3></a></li>
          <li><a href="https://www.sbadische-backheisle.de" target="_blank"><h3>sbadische Backheisle, Forchtenberg</h3></a></li>
        </ul>
      </section>

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

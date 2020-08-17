import React from "react"
import { Link } from "gatsby"

import SEO from "./seo"

const Layout = ({ title, children }) => {
  let header

  header = (
    <div>
      <nav>
        <Link />
      </nav>
    </div>
  )

  return (
    <div>
      <SEO title={title} />
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © 2017-{new Date().getFullYear()}
        {` `}
        <a href="https://www.gatsbyjs.org">Impressum & Datenschutz</a>
      </footer>
    </div>
  )
}

export default Layout

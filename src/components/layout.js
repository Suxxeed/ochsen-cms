import React from "react"
import { Link } from "gatsby"

import SEO from "./seo"

const Layout = ({ title, children }) => {
  let header

  header = (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/rittermahl">Rittermahl</Link>
        <Link to="/whiskey">Whiskey</Link>
        <Link to="/art">Kunst</Link>
        <Link to="/contact">Kontakt</Link>
      </nav>
    </div>
  )

  return (
    <div>
      <SEO title={title} />
      <header>{header}</header>
      <main>{children}</main>
      <footer className="centered">
        © 2017-{new Date().getFullYear()}
        {` `}
        <Link to="/impressum">Impressum & Datenschutz</Link>
      </footer>
    </div>
  )
}

export default Layout

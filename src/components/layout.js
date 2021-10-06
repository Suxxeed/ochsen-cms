import React from "react"
import { Link } from "gatsby"

import SEO from "./seo"

import OchsenIcon from "../../content/assets/ochsen.png"
import EichelschweinIcon from "../../content/assets/eichelschwein.png"
import SlowfoodIcon from "../../content/assets/slowfood.png"
import Besh from "../../content/assets/besh.png"

const Layout = ({ title, children }) => {
  let header = (
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
      <main>{children}</main>
      <footer className="centered">
        <img
          id="icon-bottom-ochsen"
          src={OchsenIcon}
          alt="Ochsen Icon"
          height="190px"
          width="260px"
        />
        <div className="flex">
          <p className="centered">
            Museumsgasthof Ochsen
            <br />
            Im St&auml;dtle 3<br />
            74541 Vellberg
            <br />
          </p>
        </div>
        <a
          href="https://www.besh.de/"
          target="_blank"
          rel="noreferrer"
          className="partner-icon link-no-underline"
        >
          <img
            title="Bäuerliche Erzeugergemeinschaft Schwäbisch Hall"
            src={Besh}
            alt="besh"
            height="80px"
          />
        </a>
        <a
          href="https://www.eichelschwein.de"
          target="_blank"
          rel="noreferrer"
          className="partner-icon link-no-underline"
        >
          <img
            title="Eichelschein GmbH"
            src={EichelschweinIcon}
            alt="eichelschwein"
            height="80px"
          />
        </a>
        <a
          href="https://www.slowfood.de/"
          target="_blank"
          rel="noreferrer"
          className="partner-icon link-no-underline"
        >
          <img
            title="SlowFood"
            src={SlowfoodIcon}
            alt="slowfood"
            height="80px"
          />
        </a>
        <br />
        © 2017-{new Date().getFullYear()}
        {` `}
        <Link to="/impressum">Impressum & Datenschutz</Link>
      </footer>
    </div>
  )
}

export default Layout

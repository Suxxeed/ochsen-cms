import React from "react"

import Layout from "../components/layout"

import ArtPic from "../../content/assets/kunst1.jpg"

const ArtPage = () => {
  return (
    <Layout title="Kunst im Ochsen">
      <section>
        <h3 className="centered">
          <span>K</span>unst &amp; Krempel
        </h3>
        <img src={ArtPic} alt="Logo" className="cropped" />
        <p className="centered">
          Auch in diesen Zeiten möchten wir auf unseren kleinen Saal im Anschluß
          vom Ratsherrenzimmer aufmerksam machen. Sei es als Zeitvertreib,
          Gruschteln, Entdecken oder Erwerb eines Mitbringsel und Andenken aus
          Vellberg, wir laden Sie herzlich ein, unsere historischen Räume zu
          entdecken. Bestückt mit viel Handwerkskunst, allerlei Kurioses aus dem
          16 Jrht. bis zur Neuzeit wird Sie mit Sicherheit erstaunen.
          <br />
          Die Ausstellung ist ebenfalls zu unseren Öffnungszeiten zugänglich.
          <br />
          <br />
          Gerne machen wir auch auf Anfrage einen kleinen Exkurs und Führung
          durch die Räume.
          <br />
          <br />
          Herzlich Willkommen. Romantische, besinnliche Landschaften
        </p>
      </section>
    </Layout>
  )
}

export default ArtPage

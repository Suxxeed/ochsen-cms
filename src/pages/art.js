import React from "react"

import Layout from "../components/layout"

import ArtPic from "../../content/assets/kunst1.jpg"

const ArtPage = () => {
  return (
    <Layout title="Kunst im Ochsen">
      <article>
        <h1 className="centered">Kunst &amp; Antiquitaeten</h1>
        <img src={ArtPic} alt="Logo" />
        <p className="centered">
          Romantische, besinnliche Landschaften
          <br />
          <br />
          Hier kann man nicht nur seine Kreativit&auml;t ausleben,
          <br />
          seinen Gef&uuml;hlen Ausdruck verleihen, sondern auch wunderbar
          abschalten. <br />
          <br />
          Termine: nach Vereinbarung
          <br />
          <br />
          20,- &euro; / Pers. inkl. Material (ca. 3 Std. Sie erarbeiten
          garantiert ein Bild Keilrahmen/Leinwand Ma&szlig;e 30 x 40 )<br />
          <br />
          Ich freue mich auf Ihre Anfrage.
          <br />
          <br />
          Tel.: 0160/93138278
          <br />
          <br />
          Mail: museumsgasthof@web.de
        </p>
      </article>
    </Layout>
  )
}

export default ArtPage

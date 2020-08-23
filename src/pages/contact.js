import React from "react"

import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout title="Kontaktieren Sie uns!">
      <section>
        <h1 className="centered">Kontakt</h1>
        <p>
          Besucher der Trutzveste Vellberg und des Museumsgasthof "Ochsen" haben
          die Möglichkeit neben einer Erkundung der Festung Vellberg selbst,
          auch zahlreiche andere Schlösser und Sehenswürdigkeiten in der Region
          Hohenlohe zu besichtigen. Ob mit Auto, dem Rad oder zu Fuß, in unserer
          Region Hohenlohe, gibt es noch vieles zu entdecken.
          <br />
          <br />
          Gruppen & Familienfeiern auch außerhalb der Öffnungszeiten. Wir freuen
          uns auf Ihren Besuch.
        </p>
        <a href={"tel:+4916093138278"}>+4916093138278</a>
        <br />
        <a href={"mailto:museumsgasthof@web.de"}>museumsgasthof@web.de</a>
        <p className="centered">
          Mi-Sa. 12:00 bis 14:00 Uhr <br />
          & ab 18:00 Uhr <br />
          Sonn u. Feiertag ab 12:00
        </p>
        <p>
          Museumsgasthof Ochsen
          <br />
          Im St&auml;dtle 3<br />
          74541 Vellberg
          <br />
        </p>
        <iframe
          frameborder="0"
          style={{ border: 0 }}
          src={
            "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJldmk-ZRXmEcRCXBdIy5OOqo&key=AIzaSyBvELOZetsuNw1DmIMo51X3DvCmbjzzbJY"
          }
          allowfullscreen
        ></iframe>
      </section>
    </Layout>
  )
}

export default ContactPage

import React from "react"

import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout title="Kontaktieren Sie uns!">
      <section>
        <h3 className="centered">
          <span>K</span>ontakt
        </h3>
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
        <div className="centered">
          <a href={"tel:+4916093138278"}>+4916093138278</a>
          <br />
          <br />
          <a href={"mailto:museumsgasthof@web.de"}>museumsgasthof@web.de</a>
          <br />
          <br />
          <iframe
            frameborder="0"
            style={{ border: 0 }}
            title="google map"
            src={
              "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJldmk-ZRXmEcRCXBdIy5OOqo&key=AIzaSyBvELOZetsuNw1DmIMo51X3DvCmbjzzbJY"
            }
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage

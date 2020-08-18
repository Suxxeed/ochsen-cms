import React from "react"
import { Link } from "gatsby"

import Tasting from "../../content/assets/whiskeytasting.jpg"
import OchsenInnen from "../../content/assets/gallery1.jpg"

const Events = () => {
  return (
    <div id="events">
      <article>
        <h3><span>R</span>ittermahl</h3>
        <p>
          Zu einem denkmalgeschützten Haus, erbaut 1519, gehört auch ein
          mittelalterliches Festmahl im altehrwürdigen "Ratsherrenzimmer" und
          der "Guten Stube" im Ochsen zu Vellberg. Gruppenameldungen für das
          Rittermahl sind ab 15 Personen möglich. <br />
          <Link to="/rittermahl">erfahren Sie mehr...</Link>
        </p>
        <img
          src={OchsenInnen}
          alt="Eindruck vom Gasthof"
        />
      </article>

      <article>
        <h3><span>W</span>hisky-Tasting</h3>
        <p>
          Die Welt der Whiskys im Museumsgasthof &quot;Ochsen&quot;.
          <br />
          Bei knisterndem Feuer erleben Sie Pr&auml;sentation &quot;Wasser des
          Lebens&quot;
        </p>
        <img
          src={Tasting}
          alt="Foto eines Whisky-Tastingsevents"
        />
      </article>

      <article>
        <h3><span>K</span>unst &amp; Antiquit&auml;ten</h3>
        <p>
          Im "kleinen Saal" des Museumsgasthofes Ochsen finden nicht nur
          Kunstliebhaber unter Antiquitäten,Kunst &amp; Krempel, Kostbarkeiten
          und Kurioses zum Kauf. Im kleinen Atelier finden auch in gemütlicher
          Runde kreative Workshops statt.
        </p>
      </article>
    </div>
  )
}

export default Events

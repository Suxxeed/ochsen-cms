import React from "react"
import { Link } from "gatsby"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./food.css"

import MenuIcon from "../../content/assets/eat.svg"
import Pic1 from "../../content/assets/1.jpg"
import Pic2 from "../../content/assets/2.jpg"
import Pic3 from "../../content/assets/3.jpg"
import Pic4 from "../../content/assets/4.jpg"
import Pic5 from "../../content/assets/5.jpg"
import Pic6 from "../../content/assets/6.jpg"
import Pic7 from "../../content/assets/7.jpg"
import Pic8 from "../../content/assets/8.jpg"

const Food = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autpplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  }

  return (
    <div id="food">
      <Slider {...settings}  id="slider">
        <div>
          <img src={Pic1} alt="Eventlocation Ochsen Luftaufnahme" />
        </div>
        <div>
          <img src={Pic2} alt="der große Saal im Ochsen" />
        </div>
        <div>
          <img src={Pic3} alt="gute Stube des Museumsgasthofs" />
        </div>
        <div>
          <img src={Pic4} alt="Stubeeingang" />
        </div>
        <div>
          <img src={Pic5} alt="Nebenraum Ratsherrenzimmer" />
        </div>
        <div>
          <img src={Pic6} alt="Nebenraum Ratsherrenzimmer" />
        </div>
        <div>
          <img src={Pic7} alt="Nebenraum Ratsherrenzimmer" />
        </div>
        <div>
          <img src={Pic8} alt="Nebenraum Ratsherrenzimmer" />
        </div>
      </Slider>
    </div>
  )
}

export default Food

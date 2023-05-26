import React from "react"
import { Link } from "gatsby"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./food.css"

import MenuIcon from "../../content/assets/eat.svg"
import FoodPic1 from "../../content/assets/speise1.jpg"
import FoodPic2 from "../../content/assets/speise2.jpg"
import FoodPic3 from "../../content/assets/speise3.jpg"
import FoodPic4 from "../../content/assets/speise4.jpg"
import FoodPic5 from "../../content/assets/speise5.jpg"

const Food = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autpplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    adaptiveHeight: true,
    arrows: false,
  }

  return (
    <div id="food">
      <Slider {...settings}  id="slider">
        <div>
          <img src={FoodPic1} alt="Eventlocation Ochsen Luftaufnahme" height="1234" />
        </div>
        <div>
          <img src={FoodPic2} alt="der große Saal im Ochsen" height="1234" />
        </div>
        <div>
          <img src={FoodPic3} alt="gute Stube des Museumsgasthofs" height="1234" />
        </div>
        <div>
          <img src={FoodPic4} alt="Stubeeingang" height="1234" />
        </div>
        <div>
          <img src={FoodPic5} alt="Nebenraum Ratsherrenzimmer" height="1234" />
        </div>
      </Slider>
    </div>
  )
}

export default Food

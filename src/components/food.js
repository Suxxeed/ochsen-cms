import React from "react"
import { Link } from "gatsby"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./food.css"

import DownloadIcon from "../../content/assets/speisen_download_white.svg"
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
      <Slider {...settings}>
        <div>
          <img src={FoodPic1} alt="leckeres Essen" />
        </div>
        <div>
          <img src={FoodPic2} alt="leckeres Essen" />
        </div>
        <div>
          <img src={FoodPic3} alt="leckeres Essen" />
        </div>
        <div>
          <img src={FoodPic4} alt="leckeres Essen" />
        </div>
        <div>
          <img src={FoodPic5} alt="leckeres Essen" />
        </div>
      </Slider>
      <section>
        <br />
        <p className="centered">
          Werfen sie gerne auch einen Blick auf die gesamte Speisekarte, diese
          steht Ihnen hier als PDF zur Verfügung.
        </p>
        <Link href="/pages/speisekarte.html">
          <img src={DownloadIcon} alt="Download-Icon" />
        </Link>
      </section>
    </div>
  )
}

export default Food

import React from 'react'
import "./ImgCarouselStyles.css"

import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import Maldives from "../../assets/maldives.jpg"
import Maldives2 from "../../assets/maldives2.jpg"
import Keywest from "../../assets/keywest.jpg"

function ImgCarousel() {
  return (
    <div className="container">
        <Carousel className="carousel" autoPlay={true} showArrows={true} infiniteLoop={true}
        showThumbs={false} showStatus={false}>
            <div>
                <img src={Maldives} />
            </div>
            <div>
                <img src={Maldives2} />
            </div>
            <div>
                <img src={Keywest} />
            </div>
        </Carousel>
    </div>
   
  )
}

export default ImgCarousel
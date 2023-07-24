import React from 'react'
import "./CardImgStyles.css"
import Card from "../card/Card.js"

import Borobora from "../../assets/borabora.jpg"
import Borobora2 from "../../assets/borabora2.jpg"
import Maldives from "../../assets/maldives.jpg"
import Maldives2 from "../../assets/maldives2.jpg"
import Maldives3 from "../../assets/maldives3.jpg"
import Keywest from "../../assets/keywest.jpg"


function CardImg() {
  return (
    <div className="card-img">
        <div className="container">
            <Card bgImg={Borobora} text="BoraBora" />
            <Card bgImg={Borobora2} text="Emerald Bay" />
            <Card bgImg={Maldives} text="Maldives" />
            <Card bgImg={Maldives2} text="Seychelles" />   
            <Card bgImg={Maldives3} text="Grenada" />
            <Card bgImg={Keywest} text="Keywest" />
        </div>
    </div>
  )
}

export default CardImg
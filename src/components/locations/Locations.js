import React from 'react'
import "./LocationStyles.css"
import Borabora from "../../assets/borabora.jpg"
import Borabora2 from "../../assets/borabora2.jpg"
import Maldives from "../../assets/maldives.jpg"
import Maldives2 from "../../assets/maldives2.jpg"
import Keywest from "../../assets/keywest.jpg"

function Locations() {
  return (
    <div className="locations">
        <div className="container">
           <h1>Extraordinary Stays</h1>
           <p>On the Caribbean's Best Beaches</p>
           <div className="img-container">
               <img className=" grid-col-span-2  grid-row-span-2" src={Borabora} alt="#" />
               <img src={Borabora2} alt="#" />
               <img src={Maldives} alt="#" />
               <img src={Maldives2} alt="#" />
               <img src={Keywest} alt="#" />
           </div>
        </div>
    </div>
  )
}

export default Locations
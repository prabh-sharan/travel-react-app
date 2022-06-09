import React from 'react'
import "./HeroStyles.css"
import {AiOutlineSearch} from "react-icons/ai"
import Video from "../../assets/maldivesVideo.mp4"

function Hero() {
  return (
    <div className="hero">
        <video autoPlay loop muted id="video">
            <source src={Video} type="video/mp4" />
        </video>
        <div className="overlay"></div>

        <div className="content">
             <h1>Do the extraordinary!</h1>
             <h2>Find the right experience for your vacation.</h2>
             
             <form className="form">
               <div className="form-search">
                 <input type="text" placeholder="Search Destinations" />
                 <button><AiOutlineSearch className="icon" size={18} /></button> 
               </div>
               {/* <div>
                 <button><AiOutlineSearch className="icon" /></button>
               </div> */}
             </form>
        </div>
    </div>
 

  )
}

export default Hero
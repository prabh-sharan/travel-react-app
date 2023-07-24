import React from 'react'
import "./CardStyles.css"



function Card(props) {
  return (
    <div className="card">
      <img src={props.bgImg} alt="destination" />
      <div className="card-overlay">
          <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Card
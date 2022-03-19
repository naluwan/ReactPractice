import React from 'react'

export default function Card({coverImg, location, title, date, description}){
  return (
    <div className="card">
      <span className="card--left">
        <img src={require(`../images/${coverImg}`)} alt={coverImg} className="card--img" />
      </span>
      <span className="card--right">
        <div className="card--right--location">
          <img src={require('../images/map.png')} alt="map.png" className="card--right--location_img" />
          <span className="card--right--location_text">
            {location}</span>
          <a href="#" className="card--right--location_googleMap">View on Google Maps</a>
        </div>
        <p className="card--right--title">{title}</p>
        <span className="card--right-date">{date}</span>
        <p className="card--right--des">{description}</p>
      </span>
    </div>
  )
}
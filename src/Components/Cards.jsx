import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Card.css'
import ReactPlayer from 'react-player/youtube'

export default function Cards({id, img, name,description}) {
  const url="/Player/"+id;

  return (
    <div>
          <Link to={url} className="card" >
              <img src={img} className="card__image" alt="" />
              <div className="card__overlay">
                  <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                      <img className="card__thumb" src="https://i.ibb.co/3TZQm5n/cg-avathar.jpg" alt="" />
                      <div className="card__header-text">
                          <h3 className="card__title">{name}</h3>
                          <span className="card__status">Uploaded by Rakesh</span>
                      </div>
                  </div>
                  <p className="card__description">{description}</p>
              </div>
          </Link>      
    </div>
  )
}
import React from "react"
import './Card.css'



const Card = ({title, description, img, price})  =>{
return(
    <div className="card-container">
      <div className="card-block">
        <div className="">
           <img  src={img} alt=""  className="card-img"/>
           <p className="card-desc">{description}</p>
           <p className="card-title">{title}</p>
           <p className="card-price">{price}</p>
        </div>
      </div>
    </div>
)
}

export default Card
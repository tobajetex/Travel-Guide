import React from "react";
import "./style.css"

export default function Card(props){
    return (
        <div className="container">
        <img src={`../images/${props.imageUrl}`} className="image" alt=""/>
        <div className="main">
        <div className="box-1">
        <img src="../images/icon.png" className="icon" alt=""/>
        <span className="location">{props.location}</span>
        <span className="map"><a href={props.googlemapsUrl}>View on Google Maps</a></span>
        </div>
        
        <div className="box-2">
        <h1 className="heading">{props.title}</h1>
        <span>{props.startDate}</span>
        <span>{props.endDate}</span>
        <p>{props.description}</p>
        </div>
        </div>
        
        </div>
        
    )
}
// src/components/Card.jsx
import React from "react";
import "./Card.css"; // optional css file

function Card({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
    </div>
  );
}

export default Card;

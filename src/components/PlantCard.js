import React from "react";

function PlantCard({ plant, onSoldOutToggle }) {
  const { id, name, image, price, isSoldOut } = plant;

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {isSoldOut ? (
        <button onClick={() => onSoldOutToggle(id)}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={() => onSoldOutToggle(id)}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;

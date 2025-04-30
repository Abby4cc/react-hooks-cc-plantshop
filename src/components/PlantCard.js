import React, { useState } from "react";

function PlantCard({ plant, onSoldOutToggle, onUpdatePrice, onDeletePlant }) {
  const [price, setPrice] = useState(plant.price);

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handlePriceUpdate = () => {
    onUpdatePrice(plant.id, parseFloat(price));
  };

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h2>{plant.name}</h2>
      <p>${price}</p>
      <button onClick={() => onSoldOutToggle(plant.id)}>
        {plant.isSoldOut ? "Mark as Available" : "Mark as Sold Out"}
      </button>
      <input
        type="number"
        value={price}
        onChange={handlePriceChange}
      />
      <button onClick={handlePriceUpdate}>Update Price</button>
      <button onClick={() => onDeletePlant(plant.id)}>Delete</button>
    </li>
  );
}

export default PlantCard;


import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onSoldOutToggle }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard 
          key={plant.id} 
          plant={plant} 
          onSoldOutToggle={onSoldOutToggle} 
        />
      ))}
    </ul>
  );
}

export default PlantList;

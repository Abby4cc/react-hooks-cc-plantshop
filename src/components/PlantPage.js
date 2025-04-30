import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({
  plants,
  onAddPlant,
  onSoldOutToggle,
  onUpdatePrice,
  onDeletePlant,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList
        plants={plants}
        onSoldOutToggle={onSoldOutToggle}
        onUpdatePrice={onUpdatePrice}
        onDeletePlant={onDeletePlant}
      />
    </main>
  );
}

export default PlantPage;

import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch plants from API
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // Add a new plant to the state
  const handleAddPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  // Toggle the "sold out" status of a plant
  const handleToggleSoldOut = (id) => {
    const updated = plants.map((plant) =>
      plant.id === id ? { ...plant, isSoldOut: !plant.isSoldOut } : plant
    );
    setPlants(updated);
  };

  // Update the price of a plant
  const handleUpdatePrice = (id, price) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((updatedPlant) => {
        const updatedPlants = plants.map((plant) =>
          plant.id === updatedPlant.id ? updatedPlant : plant
        );
        setPlants(updatedPlants);
      });
  };

  // Delete a plant
  const handleDeletePlant = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedPlants = plants.filter((plant) => plant.id !== id);
        setPlants(updatedPlants);
      });
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={filteredPlants}
        onAddPlant={handleAddPlant}
        onSoldOutToggle={handleToggleSoldOut}
        onUpdatePrice={handleUpdatePrice}
        onDeletePlant={handleDeletePlant}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}

export default App;

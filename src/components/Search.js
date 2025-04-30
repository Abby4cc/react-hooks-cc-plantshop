import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search plants..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default Search;

import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar filmes..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBar;

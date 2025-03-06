import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CharacterList from "./components/CharacterList";

const API_URL = "https://rickandmortyapi.com/api/character/";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const filteredCharacters = characters
    .filter((char) => char.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((char) => (speciesFilter ? char.species === speciesFilter : true))
    .filter((char) => (genderFilter ? char.gender === genderFilter : true))
    .sort((a, b) => (sortOrder === "asc" ? a.id - b.id : b.id - a.id));

  return (
    <div>
      <Header />
      <div className="container" style={{ display: "flex" }}>
        <Sidebar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          speciesFilter={speciesFilter}
          setSpeciesFilter={setSpeciesFilter}
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
        />
        <CharacterList characters={filteredCharacters} />
      </div>
    </div>
  );
};

export default App;

import React from "react";

const Sidebar = ({
  searchTerm,
  setSearchTerm,
  sortOrder,
  setSortOrder,
  speciesFilter,
  setSpeciesFilter,
  genderFilter,
  setGenderFilter,
}) => {
  return (
    <div
      className="sidebar"
      style={{
        width: "250px",
        padding: "20px",
        background: "#f4f4f4",
      }}
    >
      <h2>Filters</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "95%", marginBottom: "10px", padding: "5px" }}
      />
      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
      >
        Sort by ID ({sortOrder})
      </button>
      <select
        onChange={(e) => setSpeciesFilter(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
      >
        <option value="">All Species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
      <select
        onChange={(e) => setGenderFilter(e.target.value)}
        style={{ width: "100%", padding: "5px" }}
      >
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  );
};

export default Sidebar;

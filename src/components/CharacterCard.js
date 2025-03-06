import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div
      className="card"
      style={{
        background: "#fff",
        padding: "10px",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={character.image}
        alt={character.name}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3>{character.name}</h3>
      <p>{character.species} - {character.gender}</p>
    </div>
  );
};

export default CharacterCard;

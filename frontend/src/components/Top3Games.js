import React, { useEffect, useState } from "react";
import "../App.css"

export default function Top3Games({ gamesData }) {
  const [randomGames, setRandomGames] = useState([]);

  useEffect(() => {
    if (gamesData.length > 0) {
      const randomIndices = [];
      while (randomIndices.length < 3) {
        const randomIndex = Math.floor(Math.random() * gamesData.length);
        if (!randomIndices.includes(randomIndex)) {
          randomIndices.push(randomIndex);
        }
      }
      const selectedGames = randomIndices.map((index) => gamesData[index]);
      setRandomGames(selectedGames);
    } else {
      // handles case when no games
      setRandomGames([]);
    }
  }, [gamesData]);

  const cardStyle = {
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    width: "300px",
    height: "534px",
    borderRadius: "10px",
    margin: "0 10px", 
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    justifyContent: "flex-end", 
    backgroundColor: "#222",
  };

  const imageStyle = {
    width: "300px",
    height: "534px",
    objectFit: "cover",
  };

  const overlayStyle = {
    background: "rgba(0, 0, 0, 0.7)",
    color: "white",
    padding: "8px",
    borderRadius: "0 0 10px 10px",
    width: "100%",
    textAlign: "center",
    fontSize: "1.7rem",
    position: "absolute",
    bottom: "0",
    left: "0",
  };

  return (
    <div className="top-3-background-container">
      <h1
        style={{
          textAlign: "center",
          fontFamily: "'Press Start 2P', sans-serif",
          color: "white",
          backgroundColor: "black"
        }}
      >
        Three Game Recommendations
      </h1>
      {randomGames.length > 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {randomGames.map((game, index) => (
            <div style={cardStyle} key={index}>
              <div className="game-card-image">
                <img
                  src={game.background_image}
                  alt={game.name}
                  style={imageStyle}
                />
              </div>
              <div style={overlayStyle}>
                <p>{game.name}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Sorry, no games to recommend based on your preferences.</p>
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "../Library.css"

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

  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "'Press Start 2P', sans-serif"}}>Top Three Recommendations</h1>
      {randomGames.length > 0 ? (
        <div className="game-cards-container">
          {randomGames.map((game, index) => (
            <div className="game-card" key={index}>
              <div className="game-card-image">
                <img src={game.background_image} alt={game.name} />
              </div>
              <div className="game-card-details">
                <h2>{game.name}</h2>
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
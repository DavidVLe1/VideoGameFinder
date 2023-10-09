import React, { useEffect, useState } from "react";

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
      <h2>Top 3 Random Games</h2>
      {randomGames.length > 0 ? (
        <ul>
          {randomGames.map((game, index) => (
            <li key={index}>{game.name}</li>
          ))}
        </ul>
      ) : (
        <p>Sorry, no games to recommend based on your preferences.</p>
      )}
    </div>
  );
}
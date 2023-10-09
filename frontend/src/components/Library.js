import React from 'react';
import '../Library.css';

function Library({ gamesData }) {
  return (
    <div className="library-container">
      <h1 style={{ textAlign: "center", fontFamily: "'Press Start 2P', sans-serif"}}>Library Component</h1>
      <div className="game-cards-container">
        {gamesData.map((game, index) => (
          <div className="game-card" key={index}>
            <div className="game-card-image">
              <img src={game.background_image} alt={game.name} />
              <div className="game-name-overlay">
                <p>{game.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;

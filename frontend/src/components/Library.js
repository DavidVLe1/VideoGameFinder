import React from 'react';
import { Link } from 'react-router-dom'; 
import '../App.css';

function Library({ gamesData }) {
  return (
    <div className="library-container">
      <h1 style={{ backgroundColor: "black", textAlign: "center", fontFamily: "'Press Start 2P', sans-serif" }}>Your Library</h1>
      <div className="game-cards-container">
        {gamesData.map((game) => (
          <Link to={`/game/${game.id}`} key={game.id}>
            <div className="game-card">
              <div className="game-card-image">
                <img src={game.background_image} alt={game.name} />
                <div className="game-name-overlay">
                  <p>{game.name}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Library;

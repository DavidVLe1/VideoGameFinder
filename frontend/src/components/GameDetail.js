import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function GameDetail() {
  const { id } = useParams();

  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    fetchGameDetails(id)
      .then((data) => {
        setGameDetails(data);
      })
      .catch((error) => {
        console.error('Error fetching game details:', error);
      });
  }, [id]);

  const fetchGameDetails = async (id, genres, platforms) => {
    try {
      const genreQuery = genres ? `&genres=${genres}` : '';
      const platformQuery = platforms ? `&platforms=${platforms}` : '';
  
      const response = await fetch(`https://api.rawg.io/api/games/${id}?key=b3133a4f682a42a2925438e5efd0f900${genreQuery}${platformQuery}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching game details');
    }
  };


  if (gameDetails === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <h1 style={{ textAlign: "center", fontFamily: "'Press Start 2P', sans-serif" }}>{gameDetails.name}</h1>
      <p>Release Date: {gameDetails.releaseDate}</p>
      <p>Genre: {gameDetails.genre}</p>
      <p>Platform: {gameDetails.platform}</p>
    </div>
  );
}

export default GameDetail;

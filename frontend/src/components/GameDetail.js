import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function formatDate(dateString) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function GameDetail() {
  const { id } = useParams();

  const [gameDetails, setGameDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGameDetails(id)
      .then((data) => {
        setGameDetails(data);
      })
      .catch((error) => {
        console.error('Error fetching game details:', error);
        setError(error);
      });
  }, [id]);

  const fetchGameDetails = async (id) => {
    try {
      const response = await fetch(`https://api.rawg.io/api/games/${id}?key=b3133a4f682a42a2925438e5efd0f900`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching game details');
    }
  };

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  if (gameDetails === null) {
    return <div>Loading...</div>;
  }

  const formattedReleaseDate = formatDate(gameDetails.released);

  const largerTextStyles = {
    fontSize: '25px',
  };

  const backgroundColorStyles = {
    backgroundColor: '#B5C689',

  }

  return (
    <div style={backgroundColorStyles}>
      <h1 style={{ textAlign: "center", fontFamily: "'Press Start 2P', sans-serif" }}>{gameDetails.name}</h1>
      <p style={largerTextStyles}>Release Date: {formattedReleaseDate}</p>
      <p style={largerTextStyles}>Rating: {gameDetails.rating}/5</p>
      <p style={largerTextStyles}>Metacritic Score: {gameDetails.metacritic}/100</p>
      <p style={largerTextStyles}>Playtime: {gameDetails.playtime} hours</p>
      <div>
        <h2>Platforms</h2>
        <ul>
          {gameDetails.platforms.map((platform) => (
            <li style={largerTextStyles} key={platform.platform.id}>{platform.platform.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1>Stores</h1>
        <ul>
          {gameDetails.stores.map((store) => (
            <li style={largerTextStyles} key={store.store.id}>{store.store.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1>Tags</h1>
        <ul>
          {gameDetails.tags.map((tag) => (
            <li style={largerTextStyles} key={tag.id}>{tag.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1>Image</h1>
        <img src={gameDetails.background_image} alt="Game Background" />
      </div>

      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default GameDetail;

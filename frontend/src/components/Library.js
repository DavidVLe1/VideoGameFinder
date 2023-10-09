export default function Library({ gamesData }) {
    console.log("Games Data:", gamesData);
  
    return (
      <div>
        <h1>Library Component</h1>
        {gamesData.length > 0 ? (
          <pre>{JSON.stringify(gamesData, null, 2)}</pre>
        ) : (
          <p>No games data available in your library.</p>
        )}
      </div>
    );
  }
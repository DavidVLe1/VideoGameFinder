export default function Library({ gamesData }) {
    console.log("Games Data:", gamesData);
  
    return (
      <div>
        <h1>Library Component</h1>
        <pre>{JSON.stringify(gamesData, null, 2)}</pre>
      </div>
    );
  }
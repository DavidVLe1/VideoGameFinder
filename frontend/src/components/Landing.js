import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="homepage">
      <div className="header">
        <header style={{ backgroundColor: "#bb0a21", color: "#D3D4D9", padding: "20px", fontFamily: "Press Start 2P"}}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="../logo512.png" alt="Logo" style={{ width: "100px", height: "100px", borderRadius: "100%", marginRight: "20px" }} />
            <h1>Welcome to VideoGameFinder</h1>
          </div>
          <p>Discover your next favorite video game</p>
        </header>
      </div>
      <section className="cta-section" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "#2e282a", padding: "40px 20px" }}>
        <div className="cta-content" style={{ flex: 1 }}>
        <Link to="/library" style={{ color: "#D3D4D9"}}>
            <h2>Track Your Games</h2>
          </Link>
          <p style={{ color: "#D3D4D9" }}>
            Keep a record of the video games you've played. Rate and review
            them to get personalized recommendations.
          </p>
        </div>
        <div className="cta-image" style={{ flex: 1, textAlign: "center" }}>
          <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2023_09/3596622/230302-gaming-consoles-bd-2x1.jpg" alt="Track Your Games" style={{ maxWidth: "70%", height: "auto" }} />
        </div>
      </section>

      <section className="cta-section reverse" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "#067BC2", padding: "40px 20px" }}>
        <div className="cta-image" style={{ flex: 1, textAlign: "center" }}>
          <img src="https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/16:9/w_2240,c_limit/100-best-games-hp-b.jpg" alt="Game Recommendations" style={{ maxWidth: "70%", height: "auto" }} />
        </div>
        <div className="cta-content" style={{ flex: 1 }}>
          <Link to="/preferences" style={{ color: "#D3D4D9" }}>
            <h2>Get Game Recommendations</h2>
          </Link>
          <p style={{ color: "#D3D4D9" }}>
            Based on your gaming history and preferences, we'll recommend
            awesome games you haven't played yet.
          </p>
        </div>
      </section>

      <section className="get-started-section" style={{ backgroundColor: "#2e282a", color: "#D3D4D9", padding: "5px 5px", textAlign: "center",  }}>
        <h2>Ready to Get Started?</h2>
        <p>
          Sign up now to start tracking your games, receiving recommendations,
          and connecting with fellow gamers.
        </p>
        <Link to="/signup" className="cta-button" style={{ display: "inline-block", backgroundColor: "#ff6600", color: "#fff", padding: "10px 20px", textDecoration: "none", borderRadius: "5px" }}>
          Sign Up
        </Link>
      </section>
    </div>
  );
}
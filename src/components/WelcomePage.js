import React from "react";
import { Route, Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      {/* <Link to="/Character">Enter</Link> */}
      {/* <Route exact path="/Character" component={CharacterList} /> */}
    </section>
  );
}

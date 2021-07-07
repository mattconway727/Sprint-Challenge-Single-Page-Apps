import React, { Component } from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import { Route, Link } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header />
      {/* <WelcomePage /> */}
      <Route exact path="/Character" component={CharacterList} />
      <Route exact path="/" component={WelcomePage} />
    </main>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered flexed">
      <Link to="/">Home</Link>

      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link to="/Character">Characters</Link>
    </header>
  );
}

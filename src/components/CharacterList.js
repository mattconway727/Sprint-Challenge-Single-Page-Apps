import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm.js";

export default function CharacterList() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then(res => {
      console.log(res);
      setData(res.data.results);
    });
  }, []);

  if (!data) {
    return <p>nothing is here!</p>;
  } else {
    return (
      <div>
        <section className="character-list">
          {data.map(char => {
            return <p>{char.name}</p>;
          })}
        </section>
        <SearchForm data={data} />
      </div>
    );
  }
}

import React, { useState } from "react";

export default function SearchForm(props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  let searchStuff = event => {
    event.preventDefault();
    console.log(props.data);
    props.data.map(letter => {
      // console.log(letter.name);
      if (letter.name == inputValue.toString()) {
        console.log("found it!");
      } else {
        console.log(inputValue);
      }
    });
  };

  return (
    <section className="search-form">
      <form>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="name"
          value={inputValue}
          name="name"
        />
        <button onClick={searchStuff} type="submit">
          Search
        </button>
      </form>
    </section>
  );
}

// props.data.filter('')
// onSearch() - Do I need to write this function? what does it do though?
// what is "name"?
// where is inputValue used?

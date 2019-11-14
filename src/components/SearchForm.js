import React, { useState } from "react";

export default function SearchForm(props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(name)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

// props.data.filter('')
// onSearch() - Do I need to write this function? what does it do though?
// what is "name"?
// where is inputValue used?

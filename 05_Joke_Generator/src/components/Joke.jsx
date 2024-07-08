import React, { useState } from "react";
import "../App.css";
import Button from "./Button";
function Joke() {
  const [Joke, setJoke] = useState("");

  const fetchApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  };

  return (
    <div className="joke">
      <h1>Jokes Generator</h1>

      <Button callApi={fetchApi} />
      <p>{Joke}</p>
    </div>
  );
}

export default Joke;

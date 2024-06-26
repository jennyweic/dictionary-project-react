import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [images, setImages] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function handleImageSubmit(response) {
    console.log(response, "handle images submit");
    setImages(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=698445003bc2a9cbfcb050ae4t74oc8b`;
    console.log(apiURL);
    axios.get(apiURL).then(handleResponse);

    let imageURL = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=698445003bc2a9cbfcb050ae4t74oc8b`;
    axios.get(imageURL).then(handleImageSubmit);
  }
  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section className="Dictionary-search">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            autoFocus={true}
            onChange={updateKeyword}
            placeholder="Type your keyword here... e.g sunset"
            className="search-box"
          />

          <input type="submit" value="Search" className="submit-btn" />
        </form>
      </section>
      <section className="dictionary-results-section">
        {results && <Results results={results} />}
        {images && <Images images={images} />}
      </section>
    </div>
  );
}

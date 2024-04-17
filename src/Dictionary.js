import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=698445003bc2a9cbfcb050ae4t74oc8b`;
    console.log(apiURL);
    axios.get(apiURL).then(handleResponse);
  }
  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
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
        <section className="dictionary-results-section">
          {results && <Results results={results} />}
        </section>
      </section>
    </div>
  );
}

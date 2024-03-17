import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
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
      <form onSubmit={handleSubmit}>
        <input type="search" autofocus={true} onChange={updateKeyword} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

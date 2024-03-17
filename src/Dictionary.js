import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function submit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={submit}>
        <input type="search" autofocus={true} onChange={updateKeyword} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

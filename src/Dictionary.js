import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  function submit(event) {
    event.preventDefault();
    alert("Hello");
  }

  return (
    <div className="Dictionary">
      <form onSubmit={submit}>
        <input type="search" autofocus={true} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

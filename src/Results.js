import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h1>keyword{props.results.antonyms}</h1>
        <h2></h2>
        Definition: {props.results.definition}
      </div>
    );
  } else {
    return null;
  }
}

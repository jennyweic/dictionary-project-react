import React from "react";

export default function Results(props) {
  if (props.results.definition) {
    return (
      <div className="Results text-capitalize">
        <h1>{props.results.antonyms}</h1>
        <h4>
          <p>{props.results.partOfSpeech}</p>
        </h4>
        <h2>
          <p>Definition: {props.results.definition}</p>
        </h2>
      </div>
    );
  } else {
    return null;
  }
}

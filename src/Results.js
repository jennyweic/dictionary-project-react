import React from "react";

export default function Results(props) {
  console.log(props);

  if (props.results.definition === props.results.example) {
    return (
      <div className="Results text-capitalize text-sm-left">
        <h1>{props.results.word} </h1>
        <h4>
          <p>{props.results.phonetic}</p>
          <p>{props.results?.meanings[0].partOfSpeech}</p>
        </h4>
        <h3>
          <p>Definition: {props.results.meanings[0].definition}</p>
          <p>Example: {props.results.meanings[0].example}</p>
          <p>Synonyms: {props.results.meanings[0].synonyms[0]}</p>
        </h3>
      </div>
    );
  } else {
    return null;
  }
}

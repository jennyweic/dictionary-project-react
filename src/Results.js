import React from "react";
import "./Results.css";

export default function Results(props) {
  console.log(props);

  if (props.results.definition === props.results.example) {
    return (
      <div className="Results text-capitalize text-sm-left">
        <section className="results-top">
          <h1>{props.results.word} </h1>
          <h4>
            <p>{props.results.phonetic}</p>
            <p>{props.results?.meanings[0].partOfSpeech}</p>
          </h4>
        </section>
        <h3>
          <section className="results-details">
            <p>
              <strong>Definition:</strong>{" "}
              {props.results.meanings[0].definition}
            </p>

            {props.results.meanings[0].example && (
              <p>
                <strong>Example:</strong> {props.results.meanings[0].example}{" "}
              </p>
            )}

            <p>
              <strong>Synonyms:</strong> {props.results.meanings[0].synonyms[0]}
            </p>
          </section>
        </h3>
      </div>
    );
  } else {
    return null;
  }
}

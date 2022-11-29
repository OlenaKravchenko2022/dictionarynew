import React from "react";
import Synonyms from "./synonyms.js";
import "./meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partofSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition</strong>
              {definition.definition}
              <br />
              <strong>Example</strong>
              {definition.example}
              <br />
              <strong>Synonyms</strong>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}

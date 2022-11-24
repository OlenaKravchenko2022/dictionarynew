import React from "react";
import "./phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
        Listen
      </a>
      <span className="Text">{props.phonetic.text}</span>
    </div>
  );
}

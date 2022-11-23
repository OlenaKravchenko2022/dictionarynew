import React from "react";
import "./App.css";
import Dictionary from "./dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <h1>Dictionary</h1>
          <h2>
            If you want to understand the meaning of the word you should write
            it and press enter
          </h2>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="text-center">Coded by Olena Kravchenko</footer>
      </div>
    </div>
  );
}

import React from "react";
import "./App.css";
import Dictionary from "./dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <main>
            <Dictionary defaultKeyword="sunset" />
          </main>
        </header>
        <footer className="text-center">Coded by Olena Kravchenko</footer>
      </div>
    </div>
  );
}

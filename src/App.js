import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="chocolate" />
        </main>
        <footer className="footer-text">
          <small>
            <a
              href="https://github.com/SofiaDani?tab=repositories"
              className="link"
            >
              Open sourced code by Sofia Machado
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;

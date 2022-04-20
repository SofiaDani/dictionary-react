import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="footer-text">
          <small>Coded by Sofia Machado</small>
        </footer>
      </div>
    </div>
  );
}

export default App;

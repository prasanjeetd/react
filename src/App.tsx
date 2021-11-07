import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import AppRouter from "./Pages/Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload billa.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Home></Home>
        <BrowserRouter>
          <AppRouter></AppRouter>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

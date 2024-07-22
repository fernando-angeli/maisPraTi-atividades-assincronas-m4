import "./react.style.css";
import { useState, useEffect } from "react";
import Logo from "../assets/React_logo.png";
import data from "./data.json";

function ReactModelo() {
  const [items, setItems] = useState([]);
  const [activeInfo, setActiveInfo] = useState(0);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div className="container">
      <div className="navbar">
        <img className="logo-navbar" src={Logo} alt="" />
        <div className="text-navbar">
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </div>
      <div className="menu">
        <button
          className={activeInfo === 0 ? "active" : ""}
          onClick={() => setActiveInfo(0)}
        >
          Why React?
        </button>
        <button
          className={activeInfo === 1 ? "active" : ""}
          onClick={() => setActiveInfo(1)}
        >
          Core Features
        </button>
        <button
          className={activeInfo === 2 ? "active" : ""}
          onClick={() => setActiveInfo(2)}
        >
          Related Resources
        </button>
        <button
          className={activeInfo === 3 ? "active" : ""}
          onClick={() => setActiveInfo(3)}
        >
          React vs JS
        </button>
      </div>
      <div className="content">
        <ul className="comp-list">
          {items[activeInfo] ? (
            items[activeInfo].map((info, index) => <li key={index}>{info}</li>)
          ) : (
            <h1>ERRO</h1>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ReactModelo;

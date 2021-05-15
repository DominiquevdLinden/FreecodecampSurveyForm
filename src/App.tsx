import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="main">
        <h1 id="title">Survey Form</h1>
        <p id="description">hi</p>
        <form id="survey-form">
          <label id="name-label" htmlFor="name">
            name
          </label>
          <input id="name" type="text" placeholder="name" required></input>
          <label id="email-label" htmlFor="email">
            email
          </label>
          <input id="email" placeholder="email" type="email" required></input>
          <label id="number-label" htmlFor="number">
            number
          </label>
          <input
            type="number"
            id="number"
            placeholder="number"
            min="6"
            max="20"
          ></input>
          <select id="dropdown">
            <option>hi</option>
            <option>hello</option>
          </select>
          <input type="radio" name="radio" value="first"></input>
          <input type="radio" name="radio" value="second"></input>
          <input type="checkbox" value="first"></input>
          <input type="checkbox" value="second"></input>
          <textarea></textarea>
          <button id="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;

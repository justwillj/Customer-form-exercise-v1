import Input from "../input/Input";
import "./App.css";
import { useState } from "react";

const App = () => {
  return (
    <div>
      <h1>Customer form </h1>
      <form>
        <label>Name:</label>
        <input type="text"></input>

        <label>Email:</label>
        <input type="email"></input>

        <label>Zip Code:</label>
        <input type="number"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default App;

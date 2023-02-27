import Input from "../input/Input";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState(false);
  const formCheck = (event) => {
    if (name.length < 3) {
      setFormError(true);
      event.preventDefault();
    }
  };

  const inputOnChangeName = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h1>Customer form </h1>
      <form onSubmit={formCheck}>
        <label>Name:</label>
        {formError ? <p>Must be at least 3 characters</p> : null}
        <input type="text" value={name} onChange={inputOnChangeName}></input>
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

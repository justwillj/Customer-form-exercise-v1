import Input from "../input/Input";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");

  //Link that helped me with this
  //https://stackoverflow.com/questions/72092658/how-can-i-validate-react-input-is-not-empty-and-valid-email
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  //Toggles the errors
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [zipCodeError, setZipCodeError] = useState(false);

  const formCheck = (event) => {
    //Handles the name check
    if (name.length < 3) {
      setNameError(true);
      event.preventDefault();
    }

    if (!email.match(validEmail && email.length === 0)) {
      setEmailError(true);
      event.preventDefault();
    }
  };

  const inputOnChangeName = (e) => {
    setName(e.target.value);
  };

  const inputOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const inputOnChangeZipCode = (e) => {
    setZipCode(e.target.value);
  };

  return (
    <div>
      <h1>Customer form </h1>
      <form onSubmit={formCheck}>
        <label>Name:</label>
        {nameError ? <p>Must be at least 3 characters</p> : null}
        <input type="text" value={name} onChange={inputOnChangeName}></input>

        <label>Email:</label>
        {emailError ? <p>Must be a valid email</p> : null}
        <input type="email" value={email} onChange={inputOnChangeEmail}></input>

        <label>Zip Code:</label>
        {zipCodeError ? <p>Must be a valid zip code</p> : null}
        <input
          type="number"
          value={zipCode}
          onChange={inputOnChangeZipCode}
        ></input>

        <input type="submit"></input>
      </form>
    </div>
  );
};

export default App;

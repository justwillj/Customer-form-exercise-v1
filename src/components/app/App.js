import Input from "../input/Input";
import "./App.css";
import { useState } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

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

    //Handles the email check
    if (!email.match(validEmail)) {
      setEmailError(true);
      event.preventDefault();
    }

    //Handles the zip code check
    if (!/^\d{5}(-\d{4})?$/.test(zipCode) && zipCode.length === 0) {
      setZipCodeError(true);
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
    <div className="main">
      <h1>Customer Form </h1>
      <form onSubmit={formCheck} noValidate>
        {nameError ? <p>Must be 3 characters</p> : null}
        <Input
          type="text"
          value={name}
          onChange={inputOnChangeName}
          placeholder="Name:"
        />

        {emailError ? <p>Must be a valid email</p> : null}
        <Input
          type="email"
          value={email}
          onChange={inputOnChangeEmail}
          placeholder="Email:"
        />

        {zipCodeError ? <p>Must be a valid zip code</p> : null}
        <Input
          type="number"
          value={zipCode}
          onChange={inputOnChangeZipCode}
          placeholder="Zip Code:"
        />

        <input className="button-28" type="submit"></input>
      </form>
    </div>
  );
};

export default App;

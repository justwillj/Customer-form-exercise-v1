import Input from "../input/Input";
import "./App.css";
import { useState } from "react";
import Modal from "../modal/Modal";

const App = () => {
  //Holds onto the name value
  const [name, setName] = useState("");

  //Holds onto the email value
  const [email, setEmail] = useState("");

  //Holds onto the zipcode value
  const [zipCode, setZipCode] = useState("");

  //Link that helped me with this
  //https://stackoverflow.com/questions/72092658/how-can-i-validate-react-input-is-not-empty-and-valid-email
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  //Toggles the errors
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [zipCodeError, setZipCodeError] = useState(false);

  //Toggles on and off the modal if the login was successful
  const [loggedIn, setLoggedIn] = useState(false);

  /**
   * Checks over all of the inputs to make sure they are correctly formatted
   * @param {SubmitEvent} event - When the user submit the form
   */
  const formCheck = (event) => {
    //Handles the name check
    if (name.length < 3) {
      setNameError(true);
      event.preventDefault();
    } else {
      setNameError(false);
    }

    //Handles the email check
    if (!email.match(validEmail)) {
      setEmailError(true);
      event.preventDefault();
    } else {
      setEmailError(false);
    }

    //Handles the zip code check
    //Link that helped me with this
    //https://www.javascript-coder.com/form-validation/javascript-zip-code-validation/
    if (!/^\d{5}(-\d{4})?$/.test(zipCode)) {
      setZipCodeError(true);
      event.preventDefault();
    } else {
      setZipCodeError(false);
    }

    // //Displays the modal with a successful login
    if (
      name.length >= 3 &&
      email.match(validEmail) &&
      /^\d{5}(-\d{4})?$/.test(zipCode)
    ) {
      setLoggedIn(true);
      event.preventDefault();
      setNameError(false);
      setEmailError(false);
      setZipCodeError(false);
    }
  };

  /**
   * Sets the value of name to whatever is in name input field
   * @param {onChange} e - updates the value when the input value changes
   */
  const inputOnChangeName = (e) => {
    setName(e.target.value);
  };

  /**
   * Sets the value of email to whatever is in email input field
   * @param {onChange} e - updates the value when the input value changes
   */
  const inputOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  /**
   * Sets the value of zip code to whatever is in zip code input field
   * @param {onChange} e - updates the value when the input value changes
   */
  const inputOnChangeZipCode = (e) => {
    setZipCode(e.target.value);
  };

  /**
   * Closes the modal and resets all the input values back to blank
   */
  const closeModal = () => {
    setLoggedIn(false);
    setName("");
    setEmail("");
    setZipCode("");
  };

  return (
    <div className="main">
      {loggedIn ? <Modal name={name} onClick={closeModal} /> : null}
      <h1>Customer Form </h1>
      <form onSubmit={formCheck} noValidate>
        <Input
          label="Name:"
          type="text"
          value={name}
          onChange={inputOnChangeName}
          placeholder="e.g. John Smith"
          className={nameError ? "input-error" : null}
        />
        {nameError ? <p>Must be at least 3 characters</p> : null}

        <Input
          label="Email:"
          type="email"
          value={email}
          onChange={inputOnChangeEmail}
          placeholder="e.g. johnsmith@gmail.com"
          className={emailError ? "input-error" : null}
        />
        {emailError ? <p>Must be a valid email</p> : null}

        <Input
          label="Zip Code:"
          type="number"
          value={zipCode}
          onChange={inputOnChangeZipCode}
          placeholder="e.g. 29712"
          className={zipCodeError ? "input-error" : null}
        />
        {zipCodeError ? <p>Must be a valid zip code</p> : null}

        <input className="btn-submit" type="submit"></input>
      </form>
    </div>
  );
};

export default App;

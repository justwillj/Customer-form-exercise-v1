import React from "react";
import "./Input.css";
const Input = ({ label, type, value, onChange, placeholder }) => (
  <div>
    <label htmlFor={label}>{label}</label>
    <input
      type={type}
      id={label}
      name={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default Input;

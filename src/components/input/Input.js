import React from "react";
import "./Input.css";
const Input = ({ label, type, value, onChange, placeholder, className }) => (
  <div>
    <label htmlFor={label}>{label}</label>
    <input
      type={type}
      id={label}
      name={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
    <span class="focus-border"></span>
  </div>
);

export default Input;

import React from "react";
const Input = ({ label, type, value, onChange }) => (
  <div>
    <label htmlFor={label}>{label}</label>
    <input
      type={type}
      id={label}
      name={label}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Input;

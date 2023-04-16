import React from "react";

const Input = ({ label, name, value, user, setUser }) => {
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        className="form-control"
        name={name}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;

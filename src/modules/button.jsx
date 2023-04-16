import React from "react";

const Button = ({
  label,
  className,
  dataToggle,
  dataTarget,
  dataDismiss,
  handleSubmit,
  setUser
}) => {
  const handleClose = () => {
    setUser({
      id: 0,
      name: "",
      email: "",
      phone: "",
    });
  }
  return (
    <button
      className={className}
      data-toggle={dataToggle}
      data-target={dataTarget}
      data-dismiss={dataDismiss}
      onClick={label === "Close" ? handleClose : handleSubmit}
    >
      {label}
    </button>
  );
};

export default Button;

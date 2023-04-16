import React from "react";
import { inputArray } from "./util";
import Input from "./input";
import Button from "./button";

const Modal = ({ id, user, setUser, handleSubmit }) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add User
            </h5>
          </div>
          <div className="modal-body">
            {inputArray.map((value) => (
              <div className="form-group" key={value.label}>
                <Input
                  label={value.label}
                  name={value.name}
                  value={
                    value.name === "name"
                      ? user.name
                      : value.name === "email"
                      ? user.email
                      : user.phone
                  }
                  user={user}
                  setUser={setUser}
                />
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <Button
              label="Close"
              className="btn btn-secondary"
              dataDismiss="modal"
              setUser={setUser}
            />
            <Button
              label="Save"
              className="btn btn-primary"
              dataDismiss={user.name && user.email && user.phone && "modal"}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

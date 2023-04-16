import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../modules/table";
import Search from "../modules/search";
import Button from "../modules/button";
import Modal from "../modules/modal";

const Users = () => {
  const parsedUsers = JSON.parse(localStorage.getItem("users"));
  const [userList, setUserList] = useState(parsedUsers);
  const [userListCopy, setUserListCopy] = useState(parsedUsers);
  const [user, setUser] = useState({
    id: 0,
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (parsedUsers === null) {
      (async () => {
        const users = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUserList(users.data);
        setUserListCopy(users.data);
      })();
    }
  }, [parsedUsers]);

  const handleSubmit = async () => {
    if (user.name && user.email && user.phone) {
      localStorage.setItem(
        "users",
        JSON.stringify([...userList, { ...user, id: userList.length + 1 }])
      );
      setUserList([...userList, { ...user, id: userList.length + 1 }]);
      setUserListCopy([...userList, { ...user, id: userList.length + 1 }]);
      setUser({
        id: 0,
        name: "",
        email: "",
        phone: "",
      });
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Search userListCopy={userListCopy} setUserList={setUserList} />
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-2">
            <Button
              label="Add User"
              className="btn btn-primary"
              dataToggle="modal"
              dataTarget="#exampleModal"
            />
          </div>
          <div className="col mt-5">
            {userList?.length ? (
              <Table userList={userList} />
            ) : (
              <h1 className="text-center mt-5">No users found</h1>
            )}
          </div>
        </div>
      </div>
      <Modal
        id="exampleModal"
        user={user}
        setUser={setUser}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Users;

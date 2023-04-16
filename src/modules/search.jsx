import React from "react";

const Search = ({ userListCopy, setUserList }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    const filteredUsers = userListCopy.filter(
      (user) =>
        user.name.toLowerCase().includes(value.toLowerCase()) ||
        user.email.toLowerCase().includes(value.toLowerCase())
    );
    setUserList(filteredUsers);
  };
  return (
    <input
      className="form-control"
      placeholder="Search..."
      onChange={handleChange}
    />
  );
};

export default Search;

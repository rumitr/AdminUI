import React, { useState, useEffect, useCallback } from "react";
import DataTable from "../components/DataTable";
import useAsync from "../hooks/useAsync";

const parseID = (users) =>
  users.map((record) => ({ ...record, id: parseInt(record.id) })); //convert ids to numbers

export const fetchData = async () => {
  const url =
    process.env.URL ||
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
  const response = await fetch(url);
  const users = await response.json();
  return await parseID(users);
};

const Users = () => {
  const { status, value, error } = useAsync(fetchData);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(value);
  }, [value]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleEdit = (record) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === record.id ? record : user))
    );
  };

  const handleDelete = (ids) => {
    setUsers((prev) => prev.filter((user) => !ids.includes(user.id)));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const searchUser = useCallback((searchTerm, users) => {
    if (searchTerm === "") return users;
    return users.filter(({ id, ...userRecord }) => {
      return (
        Object.values(userRecord)
          .map((value) => value.toLowerCase())
          .filter((key) => key.includes(searchTerm)).length > 0
      );
    });
  }, []);

  return (
    <>
      <h1>Users</h1>
      <DataTable
        users={searchUser(searchTerm, users)}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        status={status}
        error={error}
      />
    </>
  );
};

export default Users;

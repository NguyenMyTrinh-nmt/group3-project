import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./UserList";
import AddUser from "./AddUser";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios.get("http://localhost:3000/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Quản lý User</h1>
      <AddUser fetchUsers={fetchUsers} />
      <UserList users={users} />
    </div>
  );
}

export default App;
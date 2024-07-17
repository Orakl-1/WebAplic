// src/components/UserTable.js
import React, { useEffect, useState } from 'react';
import { getUsers} from '../services/apiService';
import '../styles/tableStyles.css';
const UserTable = () => {
const [users, setUsers] = useState([]);
useEffect(() => {
  getUsers().then(response => {
    setUsers(response.data);
  }).catch(error => {
    console.error('There was an error fetching the users!', error);
  });
}, []);
return (
  <div className='position-table'>

    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead className="headerTable" style={{ backgroundColor: "darkgray" }}>
        <tr>
          <th style={{ textAlign: "left" }}>ID</th>
          <th style={{ textAlign: "left" }}>Name</th>
          <th style={{ textAlign: "left" }}>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id}>
            <td>{user._id.substring(0, 5)}</td>
            <td>{user.lastname + " " + user.firstname + " " + user.middlename}</td>
            <td>{user.email}</td>
      

            
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};
export default UserTable;
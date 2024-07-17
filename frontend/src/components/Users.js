import React, { useEffect, useState } from 'react';
import {getUsers} from '../services/apiService';
import '../styles/tableStyles.css'


const UserTableName = () => {
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
                        <th style={{ textAlign: "left" }}>Email</th>
                        <th style={{ textAlign: "left" }}>Is Auditor</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.isAuditor}</td>
                            <td>{user.position}</td>
                            <td>{user.plant}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserTableName;

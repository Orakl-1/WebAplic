import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getUsers } from '../services/apiService';

const Overview = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Замените URL на ваш API endpoint
        getUsers().then(response => {
            setUsers(response.data);
        }).catch(error => {
            console.error('There was an error fetching the users!', error);
        })
    }, []);

    return (
        <div className="overview">
            <h2>Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Фамилия</th>
                        <th>Имя</th>
                        <th>Отчество</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>ID_Plant</th>
                        <th>ID_Department</th>
                        <th>ID_Position</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.lastName}</td>
                            <td>{user.firstName}</td>
                            <td>{user.middleName}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td> {/* Убедитесь, что это безопасно */}
                            {/* Вставьте значения ID_Plant, ID_Department и ID_Position */}
                            {/* Это примерные значения данных; замените их на настоящие поля вашего API */}
                            <td>{user.plantId}</td> 
                            <td>{user.departmentName}</td> 
                            <td>{user.positionTitle}</td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Overview;
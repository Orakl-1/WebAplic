import React, { useEffect, useState } from 'react';
import { getDepartments } from '../services/apiService';
import '../styles/tableStyles.css';

const DepartmentsTeble = () => {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        getDepartments().then(response => {
            setDepartments(response.data);
        }).catch(error => {
            console.error('There was an error fetching the departments!', error);
        });
    }, []);
    
    return (
        <div>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead className="headerTable" style={{ backgroundColor: "darkgray" }}>
                    <tr>
                        <th style={{ textAlign: "left" }}>ID</th>
                        <th style={{ textAlign: "left" }}>Name</th>
                        <th style={{ textAlign: "left" }}>Short Name</th>
                        <th style={{ textAlign: "left" }}>Is Auditor</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map(department => (
                        <tr key={department._id}>
                            <td>{department._id}</td>
                            <td>{department.name}</td>
                            <td>{department.shortName}</td>
                            <td>{department.isAuditor ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DepartmentsTeble;
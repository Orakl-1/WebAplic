// src/components/Positions.js
import React, { useEffect, useState } from 'react';
import { getPositions } from '../services/apiService';
import '../styles/tableStyles.css';

const PositionTable = () => {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    getPositions().then(response => {
      setPositions(response.data);
    }).catch(error => {
      console.error('There was an error fetching the positions!', error);
    });
  }, []);
  
  return (
    <div>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead className="headerTable" style={{ backgroundColor: "darkgray" }}>
          <tr>
            <th style={{ textAlign: "left" }}>ID</th>
            <th style={{ textAlign: "left" }}>Name</th>
            <th style= {{ textAlign: "left" }}>Short Name</th>
          </tr>
        </thead>
        <tbody>
          {positions.map(position => (
            <tr key={position._id}>
              <td>{position._id}</td>
              <td>{position.name}</td>
              <td>{position.shortName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PositionTable;

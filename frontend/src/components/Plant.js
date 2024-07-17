// src/components/UserTable.js
import React, { useEffect, useState } from 'react';
import {getPlants} from '../services/apiService';
import '../styles/tableStyles.css';


const PlantTeble = () => {
    const [plants, setPlants] = useState([]);
    useEffect(() => {
        getPlants().then(response => {
            setPlants(response.data);
        }).catch(error => {
            console.error('There was an error fetching the plants!', error);
        });
    }, []);
    
    return (
        <div className='position-table'>

            <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead className="headerTable" style={{ backgroundColor: "darkgray" }}>
                    <tr>
                        <th style={{ textAlign: "left" }}>ID</th>
                        <th style={{ textAlign: "left" }}>Name</th>
                        <th style={{ textAlign: "left" }}>Short Name</th>
                     
                    </tr>
                </thead>
                <tbody>
                    
                    {plants.map(plant => (
                        <tr key={plant._id}>
                            <td>{plant._id}</td>
                            <td>{plant.name}</td>
                            <td>{plant.shortName}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PlantTeble;
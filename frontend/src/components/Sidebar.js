// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/tableStyles.css'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Dashboard</h2>
            <ul>
            <li className='activeText customButton'><Link to="/plants" className="customLink">Plants</Link></li>
            <li className='activeText customButton'><Link to="/departments" className="customLink">Departments</Link></li>
            <li className='activeText customButton'><Link to="/positions" className="customLink">Positions</Link></li>
            <li className='activeText customButton'><Link to="/users" className="customLink">Users</Link></li>
            <li className='activeText customButton'><Link to="/overview" className="customLink">Overview</Link></li>

            </ul>
        </div>
    );
}

export default Sidebar;
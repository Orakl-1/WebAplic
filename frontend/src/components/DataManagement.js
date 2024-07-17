// src/components/DataManagement.js

import React, { useState } from 'react';
import PlantTable from './Plant';
import UserTable from './UserTable';
import Overview from './Overview';
import Departments from './Departments';
import Position from './Positions';
import LogoutButton from './ButtonComponent/Logout';
import '../styles/tableStyles.css';


const DataManagement = () => {
  const [showUserTable, setShowUserTable] = useState(false);
  const [showPlantTable, setShowPlantTable] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [showDepartments, setShowDepartments] = useState(false);
  const [showPosition, setShowPosition] = useState(false);

  const handleShowUserTable = () => {
    setShowUserTable(true);
    setShowPlantTable(false);
    setShowOverview(false);
    setShowDepartments(false);
    setShowPosition(false);
  };

  const handleShowPlantTable = () => {
    setShowUserTable(false);
    setShowPlantTable(true);
    setShowOverview(false);
    setShowDepartments(false);
    setShowPosition(false);
  };

  const handleShowOverview = () => {
    setShowUserTable(false);
    setShowPlantTable(false);
    setShowOverview(true);
    setShowDepartments(false);
    setShowPosition(false);
  };

  const handleShowDepartments = () => {
    setShowUserTable(false);
    setShowPlantTable(false);
    setShowOverview(false);
    setShowDepartments(true);
    setShowPosition(false);
  };

  const handleShowPosition = () => {
    setShowUserTable(false);
    setShowPlantTable(false);
    setShowOverview(false);
    setShowDepartments(false);
    setShowPosition(true);
  };

  return (
    <div className='data-management-container'>
      <aside className='sidebar'>
        <h2>Таблицы</h2>
        <button onClick={handleShowUserTable}>
          Users / сотрудников 
        </button>
        <button onClick={handleShowPlantTable}>
        Plants - Заводы/Управление
        </button>
        {/* <button onClick={handleShowOverview}>Показать обзор</button> */}
        <button onClick={handleShowDepartments}>departments / подразделения</button>
        <button onClick={handleShowPosition}>positions / должности</button>
        <div class ="LineButton"></div>
        <button onClick="Create new">Создать новую запись</button>
        <LogoutButton />
      </aside>
      <main className='content'>
        {showUserTable && <UserTable />}
        {showPlantTable && <PlantTable />}
        {showOverview && <Overview />}
        {showDepartments && <Departments />}
        {showPosition && <Position />}
      </main>
    </div>
  );
};

export default DataManagement;
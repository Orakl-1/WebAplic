import React from 'react';

const LoginOut = ({ onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.reload();
  };

  return (
    <button onClick={handleLogout}>
      Выйти
    </button>
  );
};

export default LoginOut;

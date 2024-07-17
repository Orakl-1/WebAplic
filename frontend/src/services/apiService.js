// src/services/apiService.js
import axios from 'axios';

export const getUsers = () => {
 return axios.get('/api/users');
};

export const getPositions = () => {
 return axios.get('/api/positions');
};

export const getPlants = () => {
 return axios.get('/api/plants');
};

export const getDepartments = () => {
 return axios.get('/api/departments');
};
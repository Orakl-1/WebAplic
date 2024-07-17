const express = require('express');
const router = express.Router();
const userController = require('../models/userModel');
const positionController = require('../models/Position')
const plantController = require('../models/Plant');
const departmentController = require('../models/Department');

router.get('/users', userController.getAllUsers);
router.get('/positions', positionController.getAllPositions);
router.get('/plants', plantController.getAllPlants);
router.get('/departments', departmentController.getAllDepartments);

module.exports = router;

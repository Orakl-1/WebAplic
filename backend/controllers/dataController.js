const Plant = require('../models/Plant');
const Department = require('../models/Department');
const Position = require('../models/Position');
const User = require('../models/userModel');

// Добавление новых записей
async function addData(req, res) {
    try {
        const { plantData, departmentData, positionData, userData } = req.body;

        const plant = new Plant(plantData);
        const savedPlant = await plant.save();

        const department = new Department({ ...departmentData, plant: savedPlant._id });
        const savedDepartment = await department.save();

        const position = new Position({ ...positionData, plant: savedPlant._id, department: savedDepartment._id });
        const savedPosition = await position.save();

        const user = new User({ ...userData, plant: savedPlant._id, department: savedDepartment._id, position: savedPosition._id });
        await user.save();

        res.status(201).send("Данные успешно добавлены");
    } catch (error) {
        res.status(500).send("Ошибка при добавлении данных: " + error.message);
    }
}

// Удаление записей по ID
async function deleteData(req, res) {
    try {
        const { id } = req.params;

        await Plant.findByIdAndDelete(id);
        await Department.deleteMany({ plant: id });
        await Position.deleteMany({ plant: id });
        await User.deleteMany({ plant: id });

        res.status(200).send("Данные успешно удалены");
    } catch (error) {
        res.status(500).send("Ошибка при удалении данных: " + error.message);
    }
}

module.exports = { addData, deleteData };
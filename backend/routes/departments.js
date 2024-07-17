const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

// Получить все департаменты
router.get('/', async (req, res) => {
    try {
        const departments = await Department.find();
        res.json(departments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Создать новый департамент
router.post('/', async (req, res) => {
    const department = new Department({
        name: req.body.name,
    });

    try {
        const newDepartment = await department.save();
        res.status(201).json(newDepartment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Обновить существующий департамент
router.patch('/:id', async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        if (!department) return res.status(404).json({ message: 'Департамент не найден' });

if (req.body.name != null) department.name = req.body.name;

const updatedDepartment = await department.save();
res.json(updatedDepartment);

} catch (err)
{
res.status(400).json({message:
err.message});
}
});

// Удалить департамент

router.delete ('/:id', async(req,

res )=>{
try{
const department=await Department.findById(req.params.id );
if(!department)returnres .status(404 ). json ({message:'Департаментне найден'});
awaitdepartment.remove ();
res. json ({message:'Департамент удален'})
}catch(err){
res . status(500 ). json ({message : err .message});
}
});
module.exports= router;
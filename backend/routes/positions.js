const express = require('express');
const router = express.Router();
const Position = require('../models/Position');

// Получить все позиции
router.get('/', async (req, res) => {
  try {
    const positions = await Position.find();
    res.json(positions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Создать новую позицию
router.post('/', async (req, res) => {
  const position = new Position({
    name: req.body.name,
    department: req.body.department,
  });
  try {
    const newPosition = await position.save();
    res.status(201).json(newPosition);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Обновить существующую позицию
router.patch('/:id', async (req, res) => {
  try {
    const position = await Position.findById(req.params.id);
    if (!position) return res.status(404).json({ message: 'Позиция не найдена' });
    if (req.body.name != null) position.name = req.body.name;
    if (req.body.department != null) position.department = req.body.department;
    const updatedPosition = await position.save();
    res.json(updatedPosition);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Удалить позицию
router.delete('/:id', async (req, res) => {
  try {
    const position = await Position.findById(req.params.id);
    if (!position) return res.status(404).json({ message: 'Позиция не найдена' });
    await position.remove();
    res.json({ message: 'Позиция удалена' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

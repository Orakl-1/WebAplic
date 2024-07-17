const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant');

// Get all plants
router.get('/', async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new plant
router.post('/', async (req, res) => {
  const plant = new Plant({
    name: req.body.name,
    location: req.body.location,
  });
  try {
    const newPlant = await plant.save();
    res.status(201).json(newPlant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an existing plant
router.patch('/:id', async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (!plant) return res.status(404).json({ message: 'Завод не найден' });
    if (req.body.name != null) plant.name = req.body.name;
    if (req.body.location != null) plant.location = req.body.location;
    const updatedPlant = await plant.save();
    res.json(updatedPlant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a plant
router.delete('/:id', async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (!plant) return res.status(404).json({ message: 'Завод не найден' });
    await plant.remove();
    res.json({ message: 'Завод удален' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

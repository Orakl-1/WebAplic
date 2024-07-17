const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Получить всех пользователей
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Создать нового пользователя
router.post('/', async (req, res) => {
    const user = new User({
        // Ваши поля модели здесь
        name: req.body.name,
        email: req.body.email,
        department: req.body.department,
        position: req.body.position,
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Обновить существующего пользователя
router.patch('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'Пользователь не найден' });

        if (req.body.name != null) user.name = req.body.name;
        if (req.body.email != null) user.email = req.body.email;
        if (req.body.department != null) user.department = req.body.department;
        if (req.body.position != null) user.position = req.body.position;

        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Удалить пользователя
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'Пользователь не найден' });

        await user.remove();
        res.json({ message: 'Пользователь удалён' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
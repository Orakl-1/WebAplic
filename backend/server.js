require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

// Middleware для обработки JSON-запросов
app.use(express.json());

// Подключение маршрутов
const dataController = require('./controllers/dataController');

// Маршруты для пользователей
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Маршруты для аутентификации
app.use('/api/auth', require('./routes/authRoutes'));

const protectedRoutes = require('./routes/protectedRoutes');
app.use('/api', protectedRoutes);

app.get('/', (req, res) => {
  res.send('Добро пожаловать на наш API!');
});

// Роутер для вывода колекций данных
app.use('/api/users', require('./routes/users'));
app.use('/api/departments', require('./routes/departments'));
app.use('/api/plants', require('./routes/plants'));
app.use('/api/positions', require('./routes/positions'));

router.post('/add', dataController.addData);
router.delete('/delete/:id', dataController.deleteData);

const uri = process.env.MONGO_URI;
// Проверка наличия переменной окружения
if (!uri) {
  console.error('MongoDB URI is not defined in environment variables');
  process.exit(1);
}

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB:  \u2713 ');
        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

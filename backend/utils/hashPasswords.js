//hash

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

mongoose.connect('mongodb://localhost:27017/enterprice', {});

async function hashAndSavePassword(userId, plainPassword) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

    // Обновление пользователя с захешированным паролем
    await User.updateOne({ _id: userId }, { password: hashedPassword });

    console.log(`Пароль для пользователя с ID ${userId} успешно захеширован и обновлен. : ${hashedPassword}`);
  } catch (error) {
    console.error('Ошибка при хешировании пароля:', error);
  }
}

async function updateAllUserPasswords() {
  try {
    const users = await User.find();
    
    for (let user of users) {
      // Предполагается, что у вас есть какое-то значение исходного пароля
      const plainPassword = 'defaultPassword'; // Замените на реальный пароль или механизм его получения
      
      await hashAndSavePassword(user._id, plainPassword);
    }

    console.log('Все пароли пользователей успешно обновлены.');
    
  } catch (error) {
    console.error('Ошибка при обновлении паролей пользователей:', error);
  }
}

updateAllUserPasswords();
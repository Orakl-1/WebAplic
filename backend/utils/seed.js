// В backend/utils/seed.js

const mongoose = require('../config/db');
const Position = require('../models/Position');
const Plant = require('../models/Plant');
const Department = require('../models/Department');
const User = require('../models/User');

// Данные для коллекций (если нужно добавить новые записи, просто раскомментируйте и обновите этот код)

// async function seed() {
//     await Plant.deleteMany({});
//     await Department.deleteMany({});
//     await Position.deleteMany({});
//     await User.deleteMany({});

// const plant1 = new Plant({ _id:"6409cdf8959288b05050f250", name:"Комплекс глубокой переработки тяжелых остатков", shortName:"КГПТО" });
//     const savedPlant1=await plant1.save();

// const department1= new Department({ _id:"643e9749df842641c3b8cdc5", name:"Отдел главного энергетика", shortName:"ОГЭ", isAuditor:true, plant:savedPlant1._id});
//     const savedDepartment1=await department1.save();

// const position1= new Position({_id:"643fa442483e3f81ffb5ab90",name:"Начальник отдела",shortName:"Начальник отдела",plant:savedPlant1._id ,department:savedDepartment1._id});
//     const savedPosition1=await position1.save();

// const user1= new User({_id:"643fd23639ca3e6bbffcfc4d",
//         plant:savedPlant1._id ,
//         department:savedDepartment1._id ,
//         position:savedPosition1._id ,
//         email:"ivanov_ii@taifnk.ru",
//         lastname:"Иванов",
//         firstname:"Иван",
//         middlename:"Иванович",
//         password:"",
//         createdDate:new Date(),
//         roles:[]
//     });
//    await user1.save();

// console.log("Data seeded successfully");
// }

// seed().then(() => {
//    // Закрыть соединение после выполнения скрипта.
//    mongoose.connection.close();
// }).catch((err) => {
//    console.error("Error seeding data:", err);
//    // Закрыть соединение при ошибке.
//    mongoose.connection.close();
// });

console.log("Initial seeding skipped as data already exists.");
mongoose.connection.close();
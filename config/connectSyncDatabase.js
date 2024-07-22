const sequelize = require('./database.js');
const User = require('../models/user.js');
const Order = require('../models/order.js');

// List all models here
const models = {
  User,
  Order
};

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();

    await sequelize.sync({ 
        force: false, // (true || false) if true recreated table if false dosen't, default is false;
        alter: true, // (true || false) if true alters table (force and alter should be opposite);
        logging: false, //(console.log || false) logs SQL queries to the console if set to false there will be no query in the console 
        match: /test$/, // Sync only if the database name matches ( could avoide silly but big errors )
     });
    console.log('Database synchronized.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};



const connectDatabse = async () => {
  try {
    await sequelize.authenticate();
  }catch(error){
    console.error('Unable to connect to the database:', error);
  }
}


module.exports = {
  syncDatabase,
  connectDatabse
};
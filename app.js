const sequelize=require('./config/database.js');

const { syncDatabase, connectDatabse} = require('./config/connectSyncDatabase.js');

connectDatabse();
// syncDatabase();


async function lol(){

    let result=await sequelize.query('SELECT CURDATE()', { type: sequelize.QueryTypes.SELECT });
    console.log(result);

}

lol()

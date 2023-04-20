const mongoose = require('mongoose');

async function initDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL, { dbName : 'userForm' });
        console.log('connected to db successfully');
    } catch(err) {
        console.log("error connected to db");
        process.exit();
    }
}

module.exports = {
    initDB
}
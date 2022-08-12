const mongoose = require("mongoose");
const env = process.env;

async function connect() {

    await mongoose.connect(env.MONGO_URI);
    mongoose.Promise = global.Promise;
    mongoose.connection.on('error', (error) => console.log('DB err', error))

}

module.exports = connect;
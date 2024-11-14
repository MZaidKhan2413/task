const mongoose = require('mongoose');

const connectToDb = async ()=> {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
        console.log(`Connected to MongoDB: ${connectionInstance.connection.host}`);
    } catch (err) {
        console.log("MongoDB connection error: ", err);
    }
}

module.exports = connectToDb;
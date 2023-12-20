const mongoose = require('mongoose')
require('dotenv').config()
const connect = async()=>{
    await mongoose.connect(process.env.MONGODB)
    console.log("Connected to MongoDB")
}

module.exports = connect
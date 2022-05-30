const mongoose = require("mongoose")
require ('dotenv').config({path:'./connectDb/.env'})
const connectDb=async()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`data base is connected `)
        
    } catch (error) {
        console.log("data base is not connected")
        
    }




}


module.exports = connectDb

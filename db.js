const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://himanshukashyap2001:Mongodb%4052@cluster0.sw3i8it.mongodb.net/?retryWrites=true&w=majority' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose
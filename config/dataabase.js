const mongoose = require("mongoose")

module.exports = mongoose.connect("mongodb+srv://parsa-dev:sbmyV06pp6DhvaeB@cluster0-znwk6.mongodb.net/demo2?retryWrites=true",
    success => {
        console.log("DB connected")
    },
    err => {
        console.log("DB err")
    })
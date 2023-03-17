require("dotenv").config()
const mongoose = require("mongoose")

const connectionStr = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("DB connection SUCCESS")
    } catch (error) {
        console.log("DB connection Error") 
        process.exit(1)
    }
}

module.exports = connectionStr
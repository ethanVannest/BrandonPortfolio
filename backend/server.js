const express = require("express")
const app = express()
const router = express.Router()
const connectDB = require("./config/db.connection")

app.use(express.json())

const PORT = 3000

connectDB()

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
} )
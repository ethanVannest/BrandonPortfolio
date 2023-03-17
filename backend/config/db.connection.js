const mongoose = require("mongoose")

const connectionStr = async () => {
    try {
        await mongoose.connect()
    }
}
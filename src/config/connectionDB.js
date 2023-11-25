const { default: mongoose } = require("mongoose");
let url = "mongodb+srv://backend:e5aouW8cYQY9xfQ1@cluster0.rxisjfd.mongodb.net/LIVE-E-COMMERCE";
const connectionDB = async () => {
    try {
        await mongoose.connect(url);
        console.log('✅ Database Connected.')
    } catch (error) {
        console.error(error);
        console.log('Database is not connected')
    }
}


module.exports = connectionDB;
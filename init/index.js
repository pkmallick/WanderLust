
// initDB();

require("dotenv").config();

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

//const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = process.env.ATLASDB_URL;

async function main() {
    await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB Atlas");
}

main().then(initDB);

async function initDB() {
    await Listing.deleteMany({});

    const user = await User.findOne();

    console.log("User:", user);

    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: user._id,
    }));

    await Listing.insertMany(initData.data);

    console.log("Initialized");

    mongoose.connection.close();
}

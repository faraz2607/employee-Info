const mongoose = require("mongoose");

const DB = process.env.DATABASE

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(() => {
    console.log("DB connection successful");
}).catch((e) => {
    console.log("DB connection failed",e);
})
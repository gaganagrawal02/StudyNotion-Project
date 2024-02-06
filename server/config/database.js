const mongoose = require("mongoose");
require("dotenv").config();
const DATABASE_URL = process.env.MONGODB_URL || "mongodb+srv://Gagan:gagan321@cluster0.zriermp.mongodb.net/StudyNotation";
 


exports.connect = () => {
    mongoose.connect( DATABASE_URL , {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Connection Failed");
         console.log(error);
         process.exit(1);
    } );
}; 
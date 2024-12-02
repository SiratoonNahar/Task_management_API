const mongoose=require('mongoose');
require('dotenv').config();
const db_url=process.env.Mongodb_URL;
const mongodbConnection=mongoose.connect(db_url);
module.exports={
    mongodbConnection
}
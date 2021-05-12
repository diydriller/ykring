const mongoose = require('mongoose')

const ChatSchema = new mongoose.Schema({
    message:String,
    roomId:mongoose.Schema.Types.ObjectId,
    userId:mongoose.Schema.Types.ObjectId,
    createdAt : {type:Date , default: Date.now},
})
const model = mongoose.model("Chat",ChatSchema);
module.exports = model;
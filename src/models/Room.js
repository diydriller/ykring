const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
    member : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    ],
    type:String
})
const model = mongoose.model("Room",RoomSchema);
module.exports = model;
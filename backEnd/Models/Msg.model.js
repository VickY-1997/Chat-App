import mongoose from "mongoose";

const MsgSchema = new mongoose.Schema({
    senderId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    receiverId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    message : {
        type : String,
        required : true
    }
    //createdAt time
}, {timestamps : true})

const Message = mongoose.model("Message", MsgSchema)

export default Message;
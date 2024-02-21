import mongoose from 'mongoose'


const Conversation_Schema = new mongoose.Schema({
    participants : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    ],
    messages : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Message",
            default : []
        }
    ]
}, {timestamps : true})

const Conversation = mongoose.model("Conversation", Conversation_Schema)

export default Conversation;
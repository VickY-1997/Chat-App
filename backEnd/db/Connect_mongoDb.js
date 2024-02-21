import mongoose from "mongoose";

const connect_mongoDb = async () => {
    try {
        await mongoose.connect(process.env.mongoDb_url)
        console.log('mongoDb connected');
    } catch (error) {
        console.log('"Error :', error);
    }
}

export default  connect_mongoDb; 
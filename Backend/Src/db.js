import mongoose from "mongoose";

export const connectDB = async () => {
    try {
       await mongoose.connect("mongodb://mongo:3z4X9KSl7QXX3gOyLHgb@containers-us-west-145.railway.app:6382"); 
       console.log('Mongo Connected');
    } catch (error) {
        console.log(error);
    }
};

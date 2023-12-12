import mongoose from "mongoose";

export const connectDB = async () => {
    try {
       await mongoose.connect("mongodb://mongo:g62D2DcffH2f5-1B-g2b1haC323cE35g@monorail.proxy.rlwy.net:40810"); 
       console.log('Mongo Connected');
    } catch (error) {
        console.log(error);
    };
};

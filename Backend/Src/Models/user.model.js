import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    client: {
        type: String,
        default: 'Usuario',
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema);
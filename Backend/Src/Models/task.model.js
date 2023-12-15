import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    dispositive: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    imgUrl:{
        type: String
    }
}, {
    timestamps: true,
});

export default mongoose.model('Task', taskSchema);
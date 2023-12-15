import mongoose from 'mongoose';

const quoteSchema= new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    textArea: {
        type: String,
        required: true,
    },
    dropDown: {
      type: String,
      required: true,
    },
    task_user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    task_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    },
    tecnico_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tecnico',
        required: true
    },
    tecnico_name: {
        type: String
    },
    tecnico_email: {
        type: String
    }
}, { timestamps: true, });


export default mongoose.model('Quotes', quoteSchema);
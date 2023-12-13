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
    tecnico:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tecnico',
        required: false,
    }
}, { timestamps: true, });

export default mongoose.model('Quotes', quoteSchema);
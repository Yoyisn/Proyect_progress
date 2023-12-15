import Quote from '../Models/quotes.model.js';

export const createQuote = async (req, res) => {
    try {
        const { dropDown, textArea, tecnico_id, tecnico_name, tecnico_email, task_id, task_user} = req.body;

        console.log(req.body);

        const newQuote = new Quote({
            dropDown,
            textArea,
            tecnico_id,
            tecnico_name,
            tecnico_email,
            task_id,
            task_user,
        });

        const savedQuote = await newQuote.save();
        res.json(savedQuote);

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Something went wrong"});
    };
}

export const getAllQuotes = async (req, res) => {
    try {
        const quote = await Quote.find();
        res.json(quote);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Something went wrong"});
    };
};

export const getQuotes = async (req, res) => {
    try {
        const task_id = req.params.taskId;

        const quotations = await Quote.find({task_id: task_id}).populate('Tecnico');

        console.log(quotations);
        res.status(200).json(quotations);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Something went wrong"});
    }
};

/*
export const getQuotes = async (req, res) => {
    try {
        const quotes = await Quote.find({
            tecnico: req.tecnico.id
        }).populate('tecnico')
        res.json(quotes);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Something went wrong"});
    }
};
*/
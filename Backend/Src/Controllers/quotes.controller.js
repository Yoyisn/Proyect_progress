import Quote from '../Models/quotes.model.js';

export const createQuote = async (req, res) => {
    try {
        const { dropDown, textArea} = req.body;
        const newQuote = new Quote({
            dropDown,
            textArea,
            tecnico: req.tecnicoo.id
        });

        const savedQuote = await newQuote.save();
        res.json(savedQuote);

    } catch (error) {
        return res.status(500).json({message: "Something went wrong"});
    };
}

export const getAllQuotes = async (req, res) => {
    try {
        const quote = await Quote.find();
        res.json(quote);
    } catch (error) {
        return res.status(500).json({message: "Something went wrong"});
    };
};
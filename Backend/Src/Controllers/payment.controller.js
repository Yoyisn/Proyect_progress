import Stripe from "stripe";

const stripe = new Stripe("sk_test_51OG8k5I4yMLMVXpp62yZgg3zxALcshCKphPQpgiCH9nm5heYAiZ8QUqkER80KwgUtoVCc4EBhuVDYVmGTGnpHjxL00EKJXrBf5");

export const checkOut = async (req, res) => {
    try {
        
        const { id, amount } = req.body;
   
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Subscripcion mensual a SerVitech, 30 dias",
            payment_method: id,
            confirm: true,
            return_url: "http://localhost:5173"
        });
    
        console.log(payment);
    
        res.send({ message: "Successfull Payment" });

    } catch (error) {
        console.log(error);
        res.json({ message: error.raw.message });
    };
};
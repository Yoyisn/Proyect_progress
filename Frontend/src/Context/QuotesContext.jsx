import { createQuotesRequest, getAllQuotesRequest, getQuoteskRequest } from "../Api/quotes";
import { createContext, useContext, useState } from "react";

const QuoteContext = createContext();

export const useQuote = () => {
    const context = useContext(QuoteContext);

    if (!context) {
        throw new Error("useQuotes must be used within a TaskProvider");
    }

    return context;
};

export function QuoteProvider({ children }) {

    const [ quotes, setQuotes] = useState([]);

    const createQuote = async (quote) => {
        try {
            const res = await createQuotesRequest(quote);
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    };

    const getAllQuotes = async () => {
        try {
            const res = await getAllQuotesRequest();
            setQuotes(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getQuotes = async (taskId) => {
        try {
            const res = await getQuoteskRequest(taskId);
            setQuotes(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <QuoteContext.Provider value={{ quotes, createQuote, getAllQuotes, getQuotes}}>
            { children }
             </QuoteContext.Provider>
        </>
    );
};
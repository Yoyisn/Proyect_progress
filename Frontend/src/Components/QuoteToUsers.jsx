import { useQuote } from "../Context/QuotesContext";
import { useEffect } from 'react';

function QuoteToUsers() {

    const { quotes, getAllQuotes } = useQuote();

    useEffect( () => {
        getAllQuotes();
    }, []);

    console.log(quotes);

    return(
        <>
            <h1> GONORREA </h1>
        </>
    );
};

export default QuoteToUsers;
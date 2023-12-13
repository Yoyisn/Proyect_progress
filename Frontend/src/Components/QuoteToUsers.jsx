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
        </>
    );
};

export default QuoteToUsers;
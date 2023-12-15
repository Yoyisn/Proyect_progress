import { useQuote } from "../Context/QuotesContext";
import QuoteCard from "../Subcomponents/Quotecard";
import NavBar from "../Components/NavBar";

import { useEffect } from 'react';

function QuoteToUsers() {

    const { quotes, getQuotes } = useQuote();

    useEffect(() => {
        getQuotes();
    }, []);

    console.log(quotes);

    return (
        <>
            <NavBar />


            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2 mt-2'>
                {
                    quotes.map((quote) => (
                        <QuoteCard quotes={quote} key={quote.id} />
                    ))
                }
            </div>
        </>
    );
};

export default QuoteToUsers;
import { useQuote } from "../Context/QuotesContext";
import QuoteCard from "../Subcomponents/Quotecard";
import NavBar from "../Components/NavBar";

import { useEffect } from 'react';

function QuoteToUsers() {

    const { quotes, getAllQuotes } = useQuote();

    useEffect(() => {
        getAllQuotes();
    }, []);

    console.log(quotes);

    return (
        <>
            <NavBar />
            <strong className="flex gap-x-2 justify-between pt-4 ">Es importante tener en cuenta que los precios cotizados son un índice aproximado, mientras que el valor total puede variar en función de cada labor técnica.</strong>


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
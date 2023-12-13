import { QuoteProvider } from '../Context/QuotesContext.jsx';
import QuoteToUsers from '../Components/QuoteToUsers.jsx';
import { Link } from 'react-router-dom';

function Quote() {
  return(
    <>
    <QuoteProvider>
      <QuoteToUsers />
    </QuoteProvider>

    <Link to="/toPaymentQuote"> <button> !Pagar arreglo¡ </button> </Link>
    </>
  );
};

export default Quote;
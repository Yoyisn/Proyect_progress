import { QuoteProvider } from '../Context/QuotesContext.jsx';
import QuoteToUsers from '../Components/QuoteToUsers.jsx';

function Quote() {
  return(
    <>
    <QuoteProvider>
      <QuoteToUsers />
    </QuoteProvider>
    </>
  );
};

export default Quote;
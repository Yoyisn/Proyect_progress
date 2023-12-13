import axios from './axios.js';

export const createQuotesRequest = (quote) => 
axios.post('/postQuote', quote);

export const getAllQuotesRequest = () => 
axios.get('/toQuote');
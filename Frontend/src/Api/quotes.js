import axios from './axios.js';

export const createQuotesRequest = (quote) => 
axios.post('/postQuote', quote);

export const getAllQuotesRequest = () => 
axios.get('/toQuote');

export const getQuoteskRequest = (task_id) => 
axios.get(`/quoteProblem/${task_id}`);
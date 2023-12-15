import { getAllQuotes, createQuote, getQuotes } from '../Controllers/quotes.controller.js';
import { validateSchema } from '../Middlewares/validator.middleware.js';
import { authRequired } from "../Middlewares/validateToken.js";

import { quoteSchema } from '../Schemas/quotes.schema.js';
import { Router } from 'express';

const router = Router();

router.post('/postQuote', authRequired, validateSchema(quoteSchema), createQuote);

router.get('/toQuote', authRequired, getAllQuotes);

router.get('/quoteProblem/:taskId', getQuotes);

export default router;
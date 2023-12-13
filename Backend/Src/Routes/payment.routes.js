import { checkOut } from '../Controllers/payment.controller.js';
import { authRequired } from "../Middlewares/validateToken.js";
import { Router } from 'express';

const router = Router();

router.post('/checkOut', authRequired, checkOut);

//router.get('/webHook', (req, res) => res.send('Web Hook'));

//router.get('/success');

export default router;
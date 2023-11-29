import { checkOut } from '../Controllers/payment.controller.js';
import { Router } from 'express';

const router = Router();

router.post('/checkOut', checkOut);

//router.get('/webHook', (req, res) => res.send('Web Hook'));

//router.get('/success');

export default router;
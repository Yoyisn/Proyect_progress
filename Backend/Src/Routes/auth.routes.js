import { register, login, logout, profile, verifyToken } from '../Controllers/auth.controller.js';
import { authRequired } from "../Middlewares/validateToken.js";
import { Router } from "express";

const router = Router();

router.post('/login', login);

router.post('/logout', logout);

router.post('/register', register);

router.get('/verify', verifyToken);

router.get('/profile', authRequired, profile);

export default router;
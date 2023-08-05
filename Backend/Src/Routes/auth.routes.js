import { register, login, logout, profile, verifyToken } from '../Controllers/auth.controller.js';
import { validateSchema } from '../Middlewares/validator.middleware.js';
import { registerSchema, loginSchema } from '../Schemas/auth.schema.js';

import { authRequired } from "../Middlewares/validateToken.js";
import { Router } from "express";

const router = Router();

router.post('/login', validateSchema(loginSchema), login);

router.post('/logout', logout);

router.post('/register', validateSchema(registerSchema), register);

router.get('/verify', verifyToken);

router.get('/profile', authRequired, profile);

export default router;
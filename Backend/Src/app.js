import paymentRoutes from './Routes/payment.routes.js';
import taskRoutes from './Routes/tasks.routes.js';
import authRoutes from './Routes/auth.routes.js';

import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";

import quotesRoutes from './Routes/quotes.routes.js';
import cors from 'cors';



export const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use(morgan('dev'));

app.use(express.json());

app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use("/api", paymentRoutes);
app.use("/api", quotesRoutes);
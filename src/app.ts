// src/app.ts
import express, { Application } from "express";
import cors from "cors";
// import { authMiddleware } from './auth/auth.middleware';
// import routes from './routes';

const app: Application = express();

// Middlewares globais
app.use(express.json()); // Permite que a aplicação aceite JSON no body das requisições
app.use(cors()); // Habilita CORS (Cross-Origin Resource Sharing)

// Middleware de autenticação global
// app.use(authMiddleware);

// Rotas principais
// app.use('/api', routes);

export default app;

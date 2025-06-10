import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import contactsRouter from './routes/contactsRouter.js';

export default function setupServer() {
  const app = express();

  /*app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
  });*/

  // 🛡 Додайте CORS
  app.use(cors());

  // 📋 Додайте логер Pino
  app.use(pino());

  app.use(express.json());

  // 📁 Роут для контактів
  app.use('/contacts', contactsRouter);

  // ❌ Обробка невідомих маршрутів
  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  return app;
}

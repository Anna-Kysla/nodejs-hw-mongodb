import express from 'express';
import contactsRouter from './routes/contactsRouter.js';

export default function setupServer() {
  const app = express();

  app.use(express.json());

  app.use('/contacts', contactsRouter);

  // Обробка невідомих маршрутів
  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  return app;
}

import dotenv from 'dotenv';
import setupServer from './setupServer.js';
import initMongoConnection from './db/initMongoConnection.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  await initMongoConnection(); // ⬅️ Підключення до бази до старту сервера

  const app = setupServer();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

bootstrap();

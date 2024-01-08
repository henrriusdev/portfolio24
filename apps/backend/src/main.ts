import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NextFunction } from 'express';

async function importHandler() {
  const modulePath = '../../frontend/build/handler.js';
  const module = await import(modulePath);
  return module.handler;
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api');
  let port = 3000;
  if (process.env.NODE_ENV === 'production') {
    port = 8080;
    const handler = await importHandler();

    app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.url.startsWith('/api')) {
        return next();
      }
      return handler(req, res, next);
    });
  }

  await app.listen(port);
}

bootstrap();

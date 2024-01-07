import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NextFunction } from 'express';

async function importHandler() {
  const modulePath = '../../frontend/build/handler.js';
  const module = await import(modulePath);
  return module;
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api');
  console.log(process.env.NODE_ENV);

  if (process.env.NODE_ENV === 'production') {
    const handler = (await importHandler()).handler;

    app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.url.startsWith('/api')) {
        return next();
      }
      return handler(req, res, next);
    });
  }

  await app.listen(3000);
}

bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as dotenv from 'dotenv'
import { NextFunction } from 'express';

dotenv.config({ path: join(__dirname, '../.env') });

async function importHandler() {
  const module = await import(join(__dirname,'../../kit/build/handler.js'));
  return module;
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api');

  if (process.env.NODE_ENV === 'production') {
    const handler = (await importHandler()).handler;

    app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.url.startsWith("/api")) {
        return next();
      }
      return handler(req, res, next);
    });
  }

  await app.listen(3000);
}

bootstrap();
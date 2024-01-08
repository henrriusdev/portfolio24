import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function importHandler() {
  return new Function(`return import('../../frontend/build/handler.js')`)();
}

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api');
  let port = 3000;
  if (process.env.NODE_ENV === 'production') {
    port = 8080;

    const handler = (await importHandler()).handler;

    app.use((req: Request, res: Response, next: any) => {
      if (req.url.startsWith('/api')) {
        return next();
      }
      return handler(req, res, next);
    });
  }

  await app.listen(port);
}

bootstrap();

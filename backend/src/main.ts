import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.SERVER_PORT);
}
Logger.log(
  `Server start`,
  `Server running to http://localhost:${process.env.SERVER_PORT}`,
);
bootstrap();

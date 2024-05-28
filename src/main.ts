import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppConfig } from '@common/interfaces';
import { appConfig } from '@configs/app';
import { CoreModule } from './core.module';

async function bootstrap() {
  const app = await NestFactory.create(CoreModule);
  const config = app.get<AppConfig>(appConfig.KEY);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(config.port);
}

bootstrap();

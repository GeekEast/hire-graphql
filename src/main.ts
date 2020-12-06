import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/modules/app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // add pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false, // for graphql, you must turn off this option
      transform: false, // convert object to class instance, set it off.
      transformOptions: {
        enableImplicitConversion: false,
      },
    }),
  );

  const port = configService.get<number>('port');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
}
bootstrap();

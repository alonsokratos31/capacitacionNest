import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 👈
      transform: true, // 👈
      forbidNonWhitelisted: true, // 👈 ahora agregamos esta funcionalidad
    }),
  );
  const options = new DocumentBuilder()
    .setTitle('Paises')
    .setDescription('Paises application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);
  await app.listen(3001);
}
bootstrap();
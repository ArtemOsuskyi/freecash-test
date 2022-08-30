import { NestFactory }                    from '@nestjs/core';
import { AppModule }                      from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swagger = new DocumentBuilder()
    .setTitle('Freecash test')
    .setVersion('0.1')
    .addTag('freecash')
    .build();
  const document = SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}

bootstrap();

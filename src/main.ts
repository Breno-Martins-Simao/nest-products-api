import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options : SwaggerDocumentOptions = {
    
  }

  const config = new DocumentBuilder()
  .setTitle('Products API')
  .setDescription('Generic Nest JS API only for training')
  .setVersion('1.0')
  .addTag('Products')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(3000);
}
bootstrap();

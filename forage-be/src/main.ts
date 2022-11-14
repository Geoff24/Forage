import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Forage API')
    .setDescription('Forage API Swagger browser.')
    .setVersion('1.0')
    .addTag('forage')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(3000);
}
bootstrap();

// vim: ft=typescript ts=2 sw=2 sts=-1 sta et

// 1. Forzamos de forma explícita los DNS de Cloudflare y Google antes que nada
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitamos CORS por si tu frontend necesita consultar la API
  app.enableCors();

  await app.listen(3000);
  console.log('🚀 Servidor corriendo en http://localhost:3000');
}
bootstrap();
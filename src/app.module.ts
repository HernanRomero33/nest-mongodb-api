import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Proyecto, ProyectoSchema } from './schemas/proyecto.schema';

@Module({
  imports: [
    // Usamos la cadena moderna que queríamos al principio
MongooseModule.forRoot('mongodb+srv://hernanromero434_db_user:2mBxfY1OSSQimeGH@cluster0.ixznlgx.mongodb.net/oowlish_db?appName=Cluster0'),    MongooseModule.forFeature([{ name: Proyecto.name, schema: ProyectoSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
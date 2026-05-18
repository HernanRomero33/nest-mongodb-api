import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Proyecto } from './schemas/proyecto.schema';
import { CreateProyectoDto } from './dto/create-proyecto.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Proyecto.name) private readonly proyectoModel: Model<Proyecto>,
  ) {}

  async crear(datosProyecto: CreateProyectoDto): Promise<Proyecto> {
    const nuevoProyecto = new this.proyectoModel(datosProyecto);
    return await nuevoProyecto.save();
  }

  async obtenerTodos(): Promise<Proyecto[]> {
    return await this.proyectoModel.find().exec();
  }

  async actualizarEstado(id: string, nuevoEstado: string): Promise<Proyecto> {
    const proyectoActualizado = await this.proyectoModel
      .findByIdAndUpdate(id, { estado: nuevoEstado }, { new: true })
      .exec();

    if (!proyectoActualizado) {
      throw new NotFoundException(`No se encontró ningún proyecto con el ID: ${id}`);
    }
    return proyectoActualizado;
  }
}
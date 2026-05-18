import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { AppService } from './app.service'; 
import { CreateProyectoDto } from './dto/create-proyecto.dto';

@Controller('proyectos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async crear(@Body() createProyectoDto: CreateProyectoDto) {
    return await this.appService.crear(createProyectoDto);
  }

  @Get()
  async obtenerTodos() {
    return await this.appService.obtenerTodos();
  }

  @Patch(':id/estado')
  async actualizarEstado(
    @Param('id') id: string,
    @Body('estado') body: { estado: string },
  ) {
    return await this.appService.actualizarEstado(id, body.estado);
  }
}
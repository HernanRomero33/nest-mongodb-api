import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Proyecto extends Document {
  @Prop({ required: true })
  titulo!: string;

  @Prop({ required: true })
  descripcion!: string;

  @Prop({ default: 'pendiente' })
  estado!: string;
}

export const ProyectoSchema = SchemaFactory.createForClass(Proyecto);
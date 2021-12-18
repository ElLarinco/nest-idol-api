import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IdolDocument = Idol & Document;

@Schema()
export class Idol {
  @Prop({ required: true })
  fname: string;

  @Prop({ required: true })
  lname: string;

  @Prop({ required: true })
  age: number;
}

export const IdolSchema = SchemaFactory.createForClass(Idol);

/* eslint-disable prettier/prettier */
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

  @Prop({ required: true })
  school: string;

  @Prop({ required: true, default: "unknown" })
  subunit: string;
}

export const IdolSchema = SchemaFactory.createForClass(Idol);

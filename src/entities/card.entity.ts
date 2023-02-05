import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Card extends Document {
  @Prop({ required: true, unique: true, message: 'Name must be unique' })
  name: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  overall: number;

  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  club: string;

  @Prop({ required: true })
  nationality: string;

  @Prop({ required: true })
  pace: number;

  @Prop({ required: true })
  shooting: number;

  @Prop({ required: true })
  passing: number;

  @Prop({ required: true })
  dribbling: number;

  @Prop({ required: true })
  defending: number;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const CardSchema = SchemaFactory.createForClass(Card);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class FifaCard extends Document {
  @Prop({ required: true, unique: true, message: 'Name must be unique' })
  name: string;

  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  rating: number;

  @Prop({ required: true })
  club: string;

  @Prop({ required: true })
  nation: string;

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

  @Prop({ required: true })
  physicality: number;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ default: Date.now })
  createdAt: Date;

  
}

export const FifaCardSchema = SchemaFactory.createForClass(FifaCard);

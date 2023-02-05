import { Schema as MongooseSchema } from 'mongoose';
export declare class CreateProductDto {
    productName: string;
    userId: MongooseSchema.Types.ObjectId;
    id: MongooseSchema.Types.ObjectId;
    status: string;
    clientId: MongooseSchema.Types.ObjectId;
}

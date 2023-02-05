import { Schema as MongooseSchema } from 'mongoose';
export declare class CreateClientDto {
    name: string;
    contactNumber: string;
    userId: MongooseSchema.Types.ObjectId;
}

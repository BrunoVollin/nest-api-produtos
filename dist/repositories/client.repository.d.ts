import { ClientSession, Model, Schema as MongooseSchema } from 'mongoose';
import { GetQueryDto } from '../dto/getQueryDto';
import { ResponseDto } from '../dto/response.dto';
import { Client } from '../entities/client.entity';
import { CreateClientDto } from '../modules/client/dto/createClient.dto';
export declare class ClientRepository {
    private readonly clientModel;
    constructor(clientModel: Model<Client>);
    createClient(createClientDto: CreateClientDto, session: ClientSession): Promise<Client>;
    getClients(query: GetQueryDto): Promise<ResponseDto>;
    getClientById(id: MongooseSchema.Types.ObjectId): Promise<any>;
    getClientByName(name: string): Promise<Client>;
}

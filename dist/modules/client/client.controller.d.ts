import { Response } from 'express';
import { Connection, Schema as MongooseSchema } from 'mongoose';
import { GetQueryDto } from '../../dto/getQueryDto';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/createClient.dto';
export declare class ClientController {
    private readonly mongoConnection;
    private clientService;
    constructor(mongoConnection: Connection, clientService: ClientService);
    createClient(createClientDto: CreateClientDto, res: Response): Promise<Response<any, Record<string, any>>>;
    getClients(getQueryDto: GetQueryDto, res: Response): Promise<Response<any, Record<string, any>>>;
    getClientById(id: MongooseSchema.Types.ObjectId, res: Response): Promise<Response<any, Record<string, any>>>;
}

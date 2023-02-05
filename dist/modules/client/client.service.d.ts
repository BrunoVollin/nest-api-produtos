import { ClientSession, Schema as MongooseSchema } from 'mongoose';
import { GetQueryDto } from '../../dto/getQueryDto';
import { ClientRepository } from '../../repositories/client.repository';
import { UserService } from '../user/user.service';
import { CreateClientDto } from './dto/createClient.dto';
export declare class ClientService {
    private readonly clientRepository;
    private readonly userService;
    constructor(clientRepository: ClientRepository, userService: UserService);
    createClient(createClientDto: CreateClientDto, session: ClientSession): Promise<import("../../entities/client.entity").Client>;
    getClients(getQueryDto: GetQueryDto): Promise<import("../../dto/response.dto").ResponseDto>;
    getClientById(id: MongooseSchema.Types.ObjectId): Promise<any>;
}

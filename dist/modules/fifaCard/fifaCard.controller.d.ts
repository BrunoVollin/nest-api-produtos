import { Response } from 'express';
import { Connection } from 'mongoose';
import { FifaCardRepository } from '../../repositories/fifaCard.repository';
import { ClientService } from '../client/client.service';
export declare class FifaCardController {
    private readonly mongoConnection;
    private cardRepository;
    private clientService;
    constructor(mongoConnection: Connection, cardRepository: FifaCardRepository, clientService: ClientService);
    getCardByName(name: string, res: Response): Promise<Response<any, Record<string, any>>>;
}

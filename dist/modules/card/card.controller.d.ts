import { Response } from 'express';
import { Connection } from 'mongoose';
import { CardRepository } from '../../repositories/card.repository';
import { CreateCardDto } from './dto/createCard.dto';
import { ClientService } from '../client/client.service';
export declare class CardController {
    private readonly mongoConnection;
    private cardRepository;
    private clientService;
    constructor(mongoConnection: Connection, cardRepository: CardRepository, clientService: ClientService);
    createCard(createCardDto: CreateCardDto, res: Response): Promise<Response<any, Record<string, any>>>;
}

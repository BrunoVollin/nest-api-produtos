import { ClientSession } from 'mongoose';
import { CardRepository } from '../../repositories/card.repository';
import { CreateCardDto } from './dto/createCard.dto';
export declare class CardService {
    private cardRepository;
    constructor(cardRepository: CardRepository);
    createCard(createCardDto: CreateCardDto, session: ClientSession): Promise<import("../../entities/card.entity").Card & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

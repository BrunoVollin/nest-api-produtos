import { ClientSession, Model } from 'mongoose';
import { Card } from '../entities/card.entity';
import { CreateCardDto } from 'src/modules/card/dto/createCard.dto';
export declare class CardRepository {
    private readonly cardModel;
    constructor(cardModel: Model<Card>);
    createCard(cardDto: CreateCardDto, session: ClientSession): Promise<Card & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

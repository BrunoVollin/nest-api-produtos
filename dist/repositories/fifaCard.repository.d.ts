import { ClientSession, Model } from 'mongoose';
import { FifaCard } from 'src/entities/fifaCard.entity';
import { CreateFifaCardDto } from 'src/modules/fifaCard/dto/createFifaCard.dto';
export declare class FifaCardRepository {
    private readonly cardModel;
    constructor(cardModel: Model<FifaCard>);
    createCard(cardDto: CreateFifaCardDto, session: ClientSession): Promise<FifaCard & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getCardByName(name: string): Promise<any>;
}

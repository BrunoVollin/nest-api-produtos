import { FifaCardRepository } from '../../repositories/fifaCard.repository';
export declare class FifaCardService {
    private cardRepository;
    constructor(cardRepository: FifaCardRepository);
    getCardByName(name: string): Promise<any>;
}

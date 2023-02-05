import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientSession, Schema as MongooseSchema } from 'mongoose';
import { GetQueryDto } from '../../dto/getQueryDto';
import { FifaCardRepository } from '../../repositories/fifaCard.repository';
import { CreateFifaCardDto } from './dto/createFifaCard.dto';

@Injectable()
export class FifaCardService {
    constructor(private cardRepository: FifaCardRepository) {}

    async getCardByName(name: string) {
        return await this.cardRepository.getCardByName(name);
    }
}

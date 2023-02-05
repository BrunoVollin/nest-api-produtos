import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientSession, Schema as MongooseSchema } from 'mongoose';
import { GetQueryDto } from '../../dto/getQueryDto';
import { CardRepository } from '../../repositories/card.repository';
import { CreateCardDto } from './dto/createCard.dto';

@Injectable()
export class CardService {
    constructor(private cardRepository: CardRepository) {}

    async createCard(createCardDto: CreateCardDto, session: ClientSession) {
        return await this.cardRepository.createCard(createCardDto, session);
    }

}
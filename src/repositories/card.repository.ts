import { ConflictException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClientSession, Model, Schema as MongooseSchema } from 'mongoose';
import { GetQueryDto } from '../dto/getQueryDto';
import { ResponseDto } from '../dto/response.dto';
import { Card } from '../entities/card.entity';
import { CreateCardDto } from 'src/modules/card/dto/createCard.dto';

export class CardRepository {
    constructor(
        @InjectModel(Card.name)
        private readonly cardModel: Model<Card>,
    ) {}

    async createCard(cardDto: CreateCardDto, session: ClientSession) {
        let card = new this.cardModel({
            name: cardDto.name,
            image: cardDto.image,
            overall: cardDto.overall,
            position: cardDto.position,
            club: cardDto.club,
            nationality: cardDto.nationality,
            pace: cardDto.pace,
            shooting: cardDto.shooting,
            passing: cardDto.passing,
            dribbling: cardDto.dribbling,
            defending: cardDto.defending,
        });

        try {
            card = await card.save({ session });
        }
        catch (error) {
            throw new InternalServerErrorException('Error al consultar la BD', error);
        }

        return card;
    }
}
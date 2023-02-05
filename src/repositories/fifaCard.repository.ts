import { ConflictException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClientSession, Model, Schema as MongooseSchema } from 'mongoose';
import { GetQueryDto } from '../dto/getQueryDto';
import { ResponseDto } from '../dto/response.dto';
import { FifaCard } from 'src/entities/fifaCard.entity';
import { CreateFifaCardDto } from 'src/modules/fifaCard/dto/createFifaCard.dto';



export class FifaCardRepository {
    constructor(
        @InjectModel(FifaCard.name)
        private readonly cardModel: Model<FifaCard>,
    ) { }

    async createCard(cardDto: CreateFifaCardDto, session: ClientSession) {

        let card = new this.cardModel({
            name: cardDto.name,
            position: cardDto.position,
            rating: cardDto.rating,
            club: cardDto.club,
            nation: cardDto.nation,
            pace: cardDto.pace,
            shooting: cardDto.shooting,
            passing: cardDto.passing,
            dribbling: cardDto.dribbling,
            defending: cardDto.defending,
            physicality: cardDto.physicality,
        });

        try {
            card = await card.save({ session });
        }
        catch (error) {
            throw new InternalServerErrorException('Error al consultar la BD', error);
        }

        return card;
    }

    async getCardByName(name: string) {
        let card;
        try {
            card = await this.cardModel.find({ name: name }).exec();
        } catch (error) {
            throw new InternalServerErrorException('Error al consultar la BD', error);
        }

        return card;
    }
}
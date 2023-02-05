import { BadRequestException, Body, Controller, Get, HttpStatus, Param, Post, Query, Res } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Response } from 'express';
import { Connection, Schema as MongooseSchema } from 'mongoose';
import { GetQueryDto } from '../../dto/getQueryDto';
import { CardRepository } from '../../repositories/card.repository';
import { CreateCardDto } from './dto/createCard.dto';
import { ClientService } from '../client/client.service';


@Controller('card')
export class CardController {
    constructor(@InjectConnection() private readonly mongoConnection: Connection, private cardRepository: CardRepository, private clientService: ClientService) {}

    @Post('/createCard')
    async createCard(@Body() createCardDto: CreateCardDto, @Res() res: Response) {
        console.log('createCardDto', createCardDto);
        const session = await this.mongoConnection.startSession();
        session.startTransaction();
        try {
            const newCard: any = await this.cardRepository.createCard(createCardDto, session);
            await session.commitTransaction();
            return res.status(HttpStatus.OK).send(newCard);
        } catch (error) {
            await session.abortTransaction();
            throw new BadRequestException(error);
        } finally {
            session.endSession();
        }
    }
}
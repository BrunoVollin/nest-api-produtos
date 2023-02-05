import { BadRequestException, Body, Controller, Get, HttpStatus, Param, Post, Query, Res } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Response } from 'express';
import { Connection, Schema as MongooseSchema } from 'mongoose';
import { GetQueryDto } from '../../dto/getQueryDto';
import { FifaCardRepository } from '../../repositories/fifaCard.repository';
import { CreateFifaCardDto } from './dto/createFifaCard.dto';
import { ClientService } from '../client/client.service';

@Controller('fifaCard')
export class FifaCardController {
    constructor(@InjectConnection() private readonly mongoConnection: Connection, private cardRepository: FifaCardRepository, private clientService: ClientService) {}

    @Get('/getCardByName')
    async getCardByName(@Body('name') name: string, @Res() res: Response) {
        const session = await this.mongoConnection.startSession();
        session.startTransaction();
        try {
            console.log(' controller card', name);
            const card: any = await this.cardRepository.getCardByName(name);
            await session.commitTransaction();
            return res.status(HttpStatus.OK).send(card);
        } catch (error) {
            await session.abortTransaction();
            throw new BadRequestException(error);
        } finally {
            session.endSession();
        }
    }
}
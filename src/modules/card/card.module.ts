import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Card, CardSchema } from '../../entities/card.entity';
import { CardRepository } from '../../repositories/card.repository';
import { ClientModule } from '../client/client.module';
import { UserModule } from '../user/user.module';
import { CardController } from './card.controller';
import { CardService } from './card.service';

@Module({
    imports: [UserModule, ClientModule, MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }])],
    controllers: [CardController],
    providers: [CardService, CardRepository],
    exports: [CardService, CardRepository],
})
export class CardModule {}
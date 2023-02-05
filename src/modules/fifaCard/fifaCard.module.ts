import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FifaCard, FifaCardSchema } from '../../entities/fifaCard.entity';
import { FifaCardRepository } from '../../repositories/fifaCard.repository';
import { ClientModule } from '../client/client.module';
import { UserModule } from '../user/user.module';
import { FifaCardController } from './fifaCard.controller';
import { FifaCardService } from './fifaCard.service';

@Module({
    imports: [UserModule, ClientModule, MongooseModule.forFeature([{ name: FifaCard.name, schema: FifaCardSchema }])],
    controllers: [FifaCardController],
    providers: [FifaCardService, FifaCardRepository],
    exports: [FifaCardService, FifaCardRepository],
})

export class FifaCardModule {}
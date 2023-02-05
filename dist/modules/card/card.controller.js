"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const card_repository_1 = require("../../repositories/card.repository");
const createCard_dto_1 = require("./dto/createCard.dto");
const client_service_1 = require("../client/client.service");
let CardController = class CardController {
    constructor(mongoConnection, cardRepository, clientService) {
        this.mongoConnection = mongoConnection;
        this.cardRepository = cardRepository;
        this.clientService = clientService;
    }
    async createCard(createCardDto, res) {
        console.log('createCardDto', createCardDto);
        const session = await this.mongoConnection.startSession();
        session.startTransaction();
        try {
            const newCard = await this.cardRepository.createCard(createCardDto, session);
            await session.commitTransaction();
            return res.status(common_1.HttpStatus.OK).send(newCard);
        }
        catch (error) {
            await session.abortTransaction();
            throw new common_1.BadRequestException(error);
        }
        finally {
            session.endSession();
        }
    }
};
__decorate([
    (0, common_1.Post)('/createCard'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createCard_dto_1.CreateCardDto, Object]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "createCard", null);
CardController = __decorate([
    (0, common_1.Controller)('card'),
    __param(0, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [mongoose_2.Connection, card_repository_1.CardRepository, client_service_1.ClientService])
], CardController);
exports.CardController = CardController;
//# sourceMappingURL=card.controller.js.map
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
exports.FifaCardController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const fifaCard_repository_1 = require("../../repositories/fifaCard.repository");
const client_service_1 = require("../client/client.service");
let FifaCardController = class FifaCardController {
    constructor(mongoConnection, cardRepository, clientService) {
        this.mongoConnection = mongoConnection;
        this.cardRepository = cardRepository;
        this.clientService = clientService;
    }
    async getCardByName(name, res) {
        const session = await this.mongoConnection.startSession();
        session.startTransaction();
        try {
            console.log(' controller card', name);
            const card = await this.cardRepository.getCardByName(name);
            await session.commitTransaction();
            return res.status(common_1.HttpStatus.OK).send(card);
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
    (0, common_1.Get)('/getCardByName'),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FifaCardController.prototype, "getCardByName", null);
FifaCardController = __decorate([
    (0, common_1.Controller)('fifaCard'),
    __param(0, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [mongoose_2.Connection, fifaCard_repository_1.FifaCardRepository, client_service_1.ClientService])
], FifaCardController);
exports.FifaCardController = FifaCardController;
//# sourceMappingURL=fifaCard.controller.js.map
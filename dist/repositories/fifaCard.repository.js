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
exports.FifaCardRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const fifaCard_entity_1 = require("../entities/fifaCard.entity");
let FifaCardRepository = class FifaCardRepository {
    constructor(cardModel) {
        this.cardModel = cardModel;
    }
    async createCard(cardDto, session) {
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
            throw new common_1.InternalServerErrorException('Error al consultar la BD', error);
        }
        return card;
    }
    async getCardByName(name) {
        let card;
        try {
            card = await this.cardModel.find({ name: name }).exec();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error al consultar la BD', error);
        }
        return card;
    }
};
FifaCardRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(fifaCard_entity_1.FifaCard.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FifaCardRepository);
exports.FifaCardRepository = FifaCardRepository;
//# sourceMappingURL=fifaCard.repository.js.map
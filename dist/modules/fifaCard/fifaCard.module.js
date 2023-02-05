"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FifaCardModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const fifaCard_entity_1 = require("../../entities/fifaCard.entity");
const fifaCard_repository_1 = require("../../repositories/fifaCard.repository");
const client_module_1 = require("../client/client.module");
const user_module_1 = require("../user/user.module");
const fifaCard_controller_1 = require("./fifaCard.controller");
const fifaCard_service_1 = require("./fifaCard.service");
let FifaCardModule = class FifaCardModule {
};
FifaCardModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, client_module_1.ClientModule, mongoose_1.MongooseModule.forFeature([{ name: fifaCard_entity_1.FifaCard.name, schema: fifaCard_entity_1.FifaCardSchema }])],
        controllers: [fifaCard_controller_1.FifaCardController],
        providers: [fifaCard_service_1.FifaCardService, fifaCard_repository_1.FifaCardRepository],
        exports: [fifaCard_service_1.FifaCardService, fifaCard_repository_1.FifaCardRepository],
    })
], FifaCardModule);
exports.FifaCardModule = FifaCardModule;
//# sourceMappingURL=fifaCard.module.js.map
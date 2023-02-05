"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const client_entity_1 = require("../../entities/client.entity");
const user_entity_1 = require("../../entities/user.entity");
const client_repository_1 = require("../../repositories/client.repository");
const user_module_1 = require("../user/user.module");
const client_controller_1 = require("./client.controller");
const client_service_1 = require("./client.service");
let ClientModule = class ClientModule {
};
ClientModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            mongoose_1.MongooseModule.forFeature([{ name: user_entity_1.User.name, schema: user_entity_1.UserSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: client_entity_1.Client.name, schema: client_entity_1.ClientSchema }]),
        ],
        controllers: [client_controller_1.ClientController],
        providers: [client_service_1.ClientService, client_repository_1.ClientRepository],
        exports: [client_service_1.ClientService, client_repository_1.ClientRepository],
    })
], ClientModule);
exports.ClientModule = ClientModule;
//# sourceMappingURL=client.module.js.map
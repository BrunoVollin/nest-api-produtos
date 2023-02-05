"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_module_1 = require("./config/config.module");
const config_service_1 = require("./config/config.service");
const client_module_1 = require("./modules/client/client.module");
const product_module_1 = require("./modules/product/product.module");
const sale_module_1 = require("./modules/sale/sale.module");
const user_module_1 = require("./modules/user/user.module");
const card_module_1 = require("./modules/card/card.module");
const fifaCard_module_1 = require("./modules/fifaCard/fifaCard.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_module_1.ConfigModule,
            mongoose_1.MongooseModule.forRootAsync({
                inject: [config_service_1.ConfigService],
                useFactory: async (configService) => configService.getMongoConfig(),
            }),
            client_module_1.ClientModule,
            product_module_1.ProductModule,
            sale_module_1.SaleModule,
            user_module_1.UserModule,
            card_module_1.CardModule,
            fifaCard_module_1.FifaCardModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
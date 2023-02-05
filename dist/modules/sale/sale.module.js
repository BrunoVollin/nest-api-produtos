"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const sale_entity_1 = require("../../entities/sale.entity");
const sale_repository_1 = require("../../repositories/sale.repository");
const client_module_1 = require("../client/client.module");
const product_module_1 = require("../product/product.module");
const user_module_1 = require("../user/user.module");
const sale_controller_1 = require("./sale.controller");
const sale_service_1 = require("./sale.service");
let SaleModule = class SaleModule {
};
SaleModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, product_module_1.ProductModule, client_module_1.ClientModule, mongoose_1.MongooseModule.forFeature([{ name: sale_entity_1.Sale.name, schema: sale_entity_1.SaleSchema }])],
        controllers: [sale_controller_1.SaleController],
        providers: [sale_service_1.SaleService, sale_repository_1.SaleRepository],
        exports: [sale_service_1.SaleService, sale_repository_1.SaleRepository],
    })
], SaleModule);
exports.SaleModule = SaleModule;
//# sourceMappingURL=sale.module.js.map
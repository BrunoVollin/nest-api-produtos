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
exports.SaleController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const getQueryDto_1 = require("../../dto/getQueryDto");
const createSale_dto_1 = require("./dto/createSale.dto");
const sale_service_1 = require("./sale.service");
let SaleController = class SaleController {
    constructor(mongoConnection, saleService) {
        this.mongoConnection = mongoConnection;
        this.saleService = saleService;
    }
    async createSale(createSaleDto, res) {
        const session = await this.mongoConnection.startSession();
        session.startTransaction();
        try {
            const newProduct = await this.saleService.createSale(createSaleDto, session);
            await session.commitTransaction();
            return res.status(common_1.HttpStatus.OK).send(newProduct);
        }
        catch (error) {
            await session.abortTransaction();
            throw new common_1.BadRequestException(error);
        }
        finally {
            session.endSession();
        }
    }
    async getSaleById(id, getQueryDto, res) {
        const storage = await this.saleService.getSaleById(id);
        return res.status(common_1.HttpStatus.OK).send(storage);
    }
};
__decorate([
    (0, common_1.Post)('/createSale'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createSale_dto_1.CreateSaleDto, Object]),
    __metadata("design:returntype", Promise)
], SaleController.prototype, "createSale", null);
__decorate([
    (0, common_1.Get)('/getSaleById/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_2.Schema.Types.ObjectId, getQueryDto_1.GetQueryDto, Object]),
    __metadata("design:returntype", Promise)
], SaleController.prototype, "getSaleById", null);
SaleController = __decorate([
    (0, common_1.Controller)('sale'),
    __param(0, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [mongoose_2.Connection, sale_service_1.SaleService])
], SaleController);
exports.SaleController = SaleController;
//# sourceMappingURL=sale.controller.js.map
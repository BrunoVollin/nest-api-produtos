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
exports.SaleRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const sale_entity_1 = require("../entities/sale.entity");
let SaleRepository = class SaleRepository {
    constructor(saleModel) {
        this.saleModel = saleModel;
    }
    async createSale(createSaleDto, product, userId, session) {
        let sale = new this.saleModel({
            user: userId,
            product: product._id,
            client: createSaleDto.clientId,
            productName: product.productName,
            total: createSaleDto.total,
        });
        try {
            sale = await sale.save({ session });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
        if (!sale) {
            throw new common_1.BadRequestException('Sale not created');
        }
        return sale;
    }
    async getSales(query) {
        let from = query.from || 0;
        from = Number(from);
        let limit = query.limit || 0;
        limit = Number(limit);
        let sales;
        try {
            if (limit === 0) {
                sales = await this.saleModel
                    .find()
                    .populate('sale')
                    .populate('product')
                    .populate('client')
                    .populate('user', 'name email')
                    .skip(from)
                    .sort({ createdAt: -1 })
                    .exec();
            }
            else {
                sales = await this.saleModel
                    .find()
                    .populate('sale')
                    .populate('product')
                    .populate('client')
                    .populate('user', 'name email')
                    .skip(from)
                    .limit(limit)
                    .sort({ createdAt: -1 })
                    .exec();
            }
            let response;
            if (sales.length > 0) {
                response = {
                    ok: true,
                    data: sales,
                    message: 'Get Sales Ok!',
                };
            }
            else {
                response = {
                    ok: true,
                    data: [],
                    message: 'No hay sales',
                };
            }
            return response;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async getSaleById(id) {
        let sale;
        try {
            sale = await this.saleModel
                .findById(id)
                .populate('product')
                .populate('client')
                .populate('user', 'name email')
                .exec();
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
        if (!sale) {
            throw new common_1.NotFoundException('Sale not found');
        }
        return sale;
    }
    async getSaleByProductId(productId) {
        let sale;
        try {
            sale = await this.saleModel.find({ product: productId }).exec();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
        if (!sale) {
            throw new common_1.NotFoundException('Sale not found');
        }
        return sale;
    }
};
SaleRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(sale_entity_1.Sale.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SaleRepository);
exports.SaleRepository = SaleRepository;
//# sourceMappingURL=sale.repository.js.map
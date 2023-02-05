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
exports.ProductRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const product_entity_1 = require("../entities/product.entity");
let ProductRepository = class ProductRepository {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async createProduct(createProductDto, session) {
        let product = new this.productModel({
            user: createProductDto.userId,
            productName: createProductDto.productName,
            status: 'CREATED',
            client: null,
        });
        try {
            product = await product.save({ session });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
        return product;
    }
    async updateProduct(updateProduct, session) {
        const actualDate = new Date();
        actualDate.toUTCString();
        const updateData = {
            status: updateProduct.status,
            client: updateProduct.clientId,
            updatedAt: actualDate,
        };
        let product;
        try {
            product = await this.productModel
                .findOneAndUpdate({ _id: updateProduct.id }, updateData, {
                new: true,
            })
                .session(session)
                .exec();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
        if (!product) {
            throw new common_1.ConflictException('Error trying to update product');
        }
        return product;
    }
    async getProducts(query) {
        let from = query.from || 0;
        from = Number(from);
        let limit = query.limit || 0;
        limit = Number(limit);
        let products;
        try {
            if (limit === 0) {
                products = await this.productModel
                    .find()
                    .populate('client')
                    .populate('user', 'name email')
                    .skip(from)
                    .sort({ createdAt: -1 })
                    .exec();
            }
            else {
                products = await this.productModel
                    .find()
                    .populate('client')
                    .populate('user', 'name email')
                    .skip(from)
                    .limit(limit)
                    .sort({ createdAt: -1 })
                    .exec();
            }
            let response;
            if (products.length > 0) {
                response = {
                    ok: true,
                    data: products,
                    message: 'Get Products Ok!',
                };
            }
            else {
                response = {
                    ok: true,
                    data: [],
                    message: 'No hay products',
                };
            }
            return response;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async getProductById(id) {
        let product;
        try {
            product = await this.productModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
        if (!product) {
            throw new common_1.NotFoundException('The product with this id does not exist');
        }
        return product;
    }
};
ProductRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(product_entity_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map
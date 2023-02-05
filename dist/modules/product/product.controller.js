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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const getQueryDto_1 = require("../../dto/getQueryDto");
const createProduct_dto_1 = require("./dto/createProduct.dto");
const updateProduct_dto_1 = require("./dto/updateProduct.dto");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(mongoConnection, productService) {
        this.mongoConnection = mongoConnection;
        this.productService = productService;
    }
    async createProduct(createProductDto, res) {
        const session = await this.mongoConnection.startSession();
        session.startTransaction();
        try {
            const newProduct = await this.productService.createProduct(createProductDto, session);
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
    async updateProduct(id, updateProductDto, res) {
        const session = await this.mongoConnection.startSession();
        session.startTransaction();
        try {
            const newProduct = await this.productService.updateProduct(updateProductDto, session);
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
    async getProductById(id, res) {
        const storage = await this.productService.getProductById(id);
        return res.status(common_1.HttpStatus.OK).send(storage);
    }
    async getAllProducts(getQueryDto, res) {
        const storages = await this.productService.getProducts(getQueryDto);
        return res.status(common_1.HttpStatus.OK).send(storages);
    }
};
__decorate([
    (0, common_1.Post)('/createProduct'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createProduct_dto_1.CreateProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Put)('/updateProduct/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_2.Schema.Types.ObjectId, updateProduct_dto_1.UpdateProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Get)('/getProductById/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_2.Schema.Types.ObjectId, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductById", null);
__decorate([
    (0, common_1.Get)('/getProducts'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getQueryDto_1.GetQueryDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProducts", null);
ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __param(0, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [mongoose_2.Connection, product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map
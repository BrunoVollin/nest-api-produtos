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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleService = void 0;
const common_1 = require("@nestjs/common");
const sale_repository_1 = require("../../repositories/sale.repository");
const product_service_1 = require("../product/product.service");
const user_service_1 = require("../user/user.service");
let SaleService = class SaleService {
    constructor(saleRepository, userService, productService) {
        this.saleRepository = saleRepository;
        this.userService = userService;
        this.productService = productService;
    }
    async createSale(createSaleDto, session) {
        const { userId, productId, clientId } = createSaleDto;
        const getUser = await this.userService.getUserById(userId);
        if (getUser.role !== 'ADMIN') {
            throw new common_1.UnauthorizedException('Incorrect Role');
        }
        const product = await this.productService.getProductById(productId);
        const createdSale = await this.saleRepository.createSale(createSaleDto, product, userId, session);
        const updateProductDto = {
            id: product._id,
            status: 'SOLD',
            clientId: clientId,
        };
        await this.productService.updateProduct(updateProductDto, session);
        return createdSale;
    }
    async getSaleById(saleId) {
        return await this.saleRepository.getSaleById(saleId);
    }
    async getSales(query) {
        return await this.saleRepository.getSales(query);
    }
};
SaleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [sale_repository_1.SaleRepository, user_service_1.UserService, product_service_1.ProductService])
], SaleService);
exports.SaleService = SaleService;
//# sourceMappingURL=sale.service.js.map
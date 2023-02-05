import { ClientSession, Schema as MongooseSchema } from 'mongoose';
import { SaleRepository } from '../../repositories/sale.repository';
import { ProductService } from '../product/product.service';
import { UserService } from '../user/user.service';
import { CreateSaleDto } from './dto/createSale.dto';
export declare class SaleService {
    private saleRepository;
    private readonly userService;
    private readonly productService;
    constructor(saleRepository: SaleRepository, userService: UserService, productService: ProductService);
    createSale(createSaleDto: CreateSaleDto, session: ClientSession): Promise<import("../../entities/sale.entity").Sale & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getSaleById(saleId: MongooseSchema.Types.ObjectId): Promise<any>;
    getSales(query: {
        from: number;
        limit: number;
    }): Promise<any>;
}

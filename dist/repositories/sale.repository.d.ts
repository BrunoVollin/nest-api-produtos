import { ClientSession, Model, Schema as MongooseSchema } from 'mongoose';
import { Product } from '../entities/product.entity';
import { Sale } from '../entities/sale.entity';
import { CreateSaleDto } from '../modules/sale/dto/createSale.dto';
export declare class SaleRepository {
    private readonly saleModel;
    constructor(saleModel: Model<Sale>);
    createSale(createSaleDto: CreateSaleDto, product: Product, userId: MongooseSchema.Types.ObjectId, session: ClientSession): Promise<Sale & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getSales(query: {
        from: number;
        limit: number;
    }): Promise<any>;
    getSaleById(id: MongooseSchema.Types.ObjectId): Promise<any>;
    getSaleByProductId(productId: MongooseSchema.Types.ObjectId): Promise<any>;
}

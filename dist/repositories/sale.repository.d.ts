/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
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

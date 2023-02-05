import { ClientSession, Model, Schema as MongooseSchema } from 'mongoose';
import { GetQueryDto } from '../dto/getQueryDto';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from '../modules/product/dto/createProduct.dto';
import { UpdateProductDto } from '../modules/product/dto/updateProduct.dto';
export declare class ProductRepository {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    createProduct(createProductDto: CreateProductDto, session: ClientSession): Promise<Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateProduct(updateProduct: UpdateProductDto, session: ClientSession): Promise<any>;
    getProducts(query: GetQueryDto): Promise<any>;
    getProductById(id: MongooseSchema.Types.ObjectId): Promise<any>;
}

import { ClientSession, Schema as MongooseSchema } from 'mongoose';
import { GetQueryDto } from 'src/dto/getQueryDto';
import { ProductRepository } from '../../repositories/product.repository';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: ProductRepository);
    createProduct(createProductDto: CreateProductDto, session: ClientSession): Promise<import("../../entities/product.entity").Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getProductById(productId: MongooseSchema.Types.ObjectId): Promise<any>;
    getProducts(getQueryDto: GetQueryDto): Promise<any>;
    updateProduct(updateProductDto: UpdateProductDto, session: ClientSession): Promise<any>;
}

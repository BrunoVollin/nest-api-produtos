import { Response } from 'express';
import { Connection, Schema as MongooseSchema } from 'mongoose';
import { GetQueryDto } from '../../dto/getQueryDto';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly mongoConnection;
    private productService;
    constructor(mongoConnection: Connection, productService: ProductService);
    createProduct(createProductDto: CreateProductDto, res: Response): Promise<Response<any, Record<string, any>>>;
    updateProduct(id: MongooseSchema.Types.ObjectId, updateProductDto: UpdateProductDto, res: Response): Promise<Response<any, Record<string, any>>>;
    getProductById(id: MongooseSchema.Types.ObjectId, res: Response): Promise<Response<any, Record<string, any>>>;
    getAllProducts(getQueryDto: GetQueryDto, res: any): Promise<any>;
}

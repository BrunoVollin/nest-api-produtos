import { Connection, Schema as MongooseSchema } from 'mongoose';
import { GetQueryDto } from '../../dto/getQueryDto';
import { CreateSaleDto } from './dto/createSale.dto';
import { SaleService } from './sale.service';
export declare class SaleController {
    private readonly mongoConnection;
    private saleService;
    constructor(mongoConnection: Connection, saleService: SaleService);
    createSale(createSaleDto: CreateSaleDto, res: any): Promise<any>;
    getSaleById(id: MongooseSchema.Types.ObjectId, getQueryDto: GetQueryDto, res: any): Promise<any>;
}

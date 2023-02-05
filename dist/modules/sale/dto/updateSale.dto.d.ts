import { CreateSaleDto } from './createSale.dto';
declare const UpdateSaleDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSaleDto>>;
export declare class UpdateSaleDto extends UpdateSaleDto_base {
    payedAmount: number;
    observation: string;
}
export {};

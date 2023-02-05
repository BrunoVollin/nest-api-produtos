import { IsString, IsNotEmpty, IsNumber } from "class-validator";


export class CreateFifaCardDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    image: string;

    @IsNumber()
    @IsNotEmpty()
    overall: number;

    @IsString()
    @IsNotEmpty()
    position: string;

    @IsString()
    @IsNotEmpty()
    club: string;

    @IsString()
    @IsNotEmpty()
    nation: string;

    @IsNumber()
    @IsNotEmpty()
    rating: number;

    @IsNumber()
    @IsNotEmpty()
    pace: number;

    @IsNumber()
    @IsNotEmpty()
    shooting: number;

    @IsNumber()
    @IsNotEmpty()
    passing: number;

    @IsNumber()
    @IsNotEmpty()
    dribbling: number;

    @IsNumber()
    @IsNotEmpty()
    defending: number;

    @IsNumber()
    @IsNotEmpty()
    physicality: number;
}

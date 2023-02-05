import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateCardDto {
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
  nationality: string;

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
}

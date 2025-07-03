import { IsNumber, IsString } from "class-validator";

export class  CreatePropertyDto {
    @IsString()
    name: string;
    @IsString()
    description: string;
    @IsNumber()
    area: number;
}
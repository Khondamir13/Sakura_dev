import { Expose } from "class-transformer";
import { IsString } from "class-validator";

export class HeaderDTO{
    @IsString()
    @Expose({name: 'access-token'})
    accessToken: string;
}
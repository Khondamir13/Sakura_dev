import { Body, Controller, Get, Headers, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { HeaderDTO } from './dto/header.dto';
import { RequestHeader } from './pipes/request-header';

@Controller('property')
export class PropertyController {

    @Get()
    findAll() {
        return 'This action returns all properties';
    }   

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id, @Query("sort", ParseBoolPipe) sort) {
        console.log(typeof id, typeof sort);
        return `This action returns a #${id} property`;
    }
    
    @Post()
    @UsePipes(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true
    }))
    create(
        @Body() body: CreatePropertyDto,

        // Example of using headers
        @RequestHeader(HeaderDTO) headers:HeaderDTO,
    ) {
        return headers
    }
}

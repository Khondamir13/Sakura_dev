import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {

    @Get()
    findAll() {
        return 'This action returns all properties';
    }   

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} property`;
    }
    
    @Post()
    create(@Body() body: any) {
        return `This action creates a new property with data: ${body}`;
    }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeProductionService } from './type_production.service';
import { CreateTypeProductionDto } from './dto/create-type_production.dto';
import { UpdateTypeProductionDto } from './dto/update-type_production.dto';

@Controller('type-production')
export class TypeProductionController {
  constructor(private readonly typeProductionService: TypeProductionService) {}

  @Post()
  create(@Body() createTypeProductionDto: CreateTypeProductionDto) {
    return this.typeProductionService.create(createTypeProductionDto);
  }

  @Get()
  findAll() {
    return this.typeProductionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeProductionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeProductionDto: UpdateTypeProductionDto) {
    return this.typeProductionService.update(+id, updateTypeProductionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeProductionService.remove(+id);
  }
}

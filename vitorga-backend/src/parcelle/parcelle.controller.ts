import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParcelleService } from './parcelle.service';
import { CreateParcelleDto } from './dto/create-parcelle.dto';
import { UpdateParcelleDto } from './dto/update-parcelle.dto';

@Controller('parcelle')
export class ParcelleController {
  constructor(private readonly parcelleService: ParcelleService) {}

  @Post()
  create(@Body() createParcelleDto: CreateParcelleDto) {
    return this.parcelleService.create(createParcelleDto);
  }

  @Get()
  findAll() {
    return this.parcelleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parcelleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParcelleDto: UpdateParcelleDto) {
    return this.parcelleService.update(+id, updateParcelleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parcelleService.remove(+id);
  }
}

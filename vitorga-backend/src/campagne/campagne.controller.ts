import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CampagneService } from './campagne.service';
import { CreateCampagneDto } from './dto/create-campagne.dto';
import { UpdateCampagneDto } from './dto/update-campagne.dto';

@Controller('campagne')
export class CampagneController {
  constructor(private readonly campagneService: CampagneService) {}

  @Post()
  create(@Body() createCampagneDto: CreateCampagneDto) {
    return this.campagneService.create(createCampagneDto);
  }

  @Get()
  findAll() {
    return this.campagneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campagneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCampagneDto: UpdateCampagneDto) {
    return this.campagneService.update(+id, updateCampagneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campagneService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppellationService } from './appellation.service';
import { CreateAppellationDto } from './dto/create-appellation.dto';
import { UpdateAppellationDto } from './dto/update-appellation.dto';

@Controller('appellation')
export class AppellationController {
  constructor(private readonly appellationService: AppellationService) {}

  @Post()
  create(@Body() createAppellationDto: CreateAppellationDto) {
    return this.appellationService.create(createAppellationDto);
  }

  @Get()
  findAll() {
    return this.appellationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appellationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppellationDto: UpdateAppellationDto) {
    return this.appellationService.update(+id, updateAppellationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appellationService.remove(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VigneService } from './vigne.service';
import { CreateVigneDto } from './dto/create-vigne.dto';
import { UpdateVigneDto } from './dto/update-vigne.dto';

@Controller('vigne')
export class VigneController {
  constructor(private readonly vigneService: VigneService) {}

  @Post()
  create(@Body() createVigneDto: CreateVigneDto) {
    return this.vigneService.create(createVigneDto);
  }

  @Get()
  findAll() {
    return this.vigneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vigneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVigneDto: UpdateVigneDto) {
    return this.vigneService.update(+id, updateVigneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vigneService.remove(+id);
  }
}

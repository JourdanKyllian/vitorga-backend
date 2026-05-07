import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BatimentService } from './batiment.service';
import { CreateBatimentDto } from './dto/create-batiment.dto';
import { UpdateBatimentDto } from './dto/update-batiment.dto';

@Controller('batiment')
export class BatimentController {
  constructor(private readonly batimentService: BatimentService) {}

  @Post()
  create(@Body() createBatimentDto: CreateBatimentDto) {
    return this.batimentService.create(createBatimentDto);
  }

  @Get()
  findAll() {
    return this.batimentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.batimentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBatimentDto: UpdateBatimentDto,
  ) {
    return this.batimentService.update(+id, updateBatimentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.batimentService.remove(+id);
  }
}

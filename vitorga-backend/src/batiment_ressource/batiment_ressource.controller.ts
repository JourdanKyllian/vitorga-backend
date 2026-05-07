import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BatimentRessourceService } from './batiment_ressource.service';
import { CreateBatimentRessourceDto } from './dto/create-batiment_ressource.dto';
import { UpdateBatimentRessourceDto } from './dto/update-batiment_ressource.dto';

@Controller('batiment-ressource')
export class BatimentRessourceController {
  constructor(
    private readonly batimentRessourceService: BatimentRessourceService,
  ) {}

  @Post()
  create(@Body() createBatimentRessourceDto: CreateBatimentRessourceDto) {
    return this.batimentRessourceService.create(createBatimentRessourceDto);
  }

  @Get()
  findAll() {
    return this.batimentRessourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.batimentRessourceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBatimentRessourceDto: UpdateBatimentRessourceDto,
  ) {
    return this.batimentRessourceService.update(
      +id,
      updateBatimentRessourceDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.batimentRessourceService.remove(+id);
  }
}

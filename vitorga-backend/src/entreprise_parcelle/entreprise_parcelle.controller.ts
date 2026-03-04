import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntrepriseParcelleService } from './entreprise_parcelle.service';
import { CreateEntrepriseParcelleDto } from './dto/create-entreprise_parcelle.dto';
import { UpdateEntrepriseParcelleDto } from './dto/update-entreprise_parcelle.dto';

@Controller('entreprise-parcelle')
export class EntrepriseParcelleController {
  constructor(private readonly entrepriseParcelleService: EntrepriseParcelleService) {}

  @Post()
  create(@Body() createEntrepriseParcelleDto: CreateEntrepriseParcelleDto) {
    return this.entrepriseParcelleService.create(createEntrepriseParcelleDto);
  }

  @Get()
  findAll() {
    return this.entrepriseParcelleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entrepriseParcelleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntrepriseParcelleDto: UpdateEntrepriseParcelleDto) {
    return this.entrepriseParcelleService.update(+id, updateEntrepriseParcelleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entrepriseParcelleService.remove(+id);
  }
}

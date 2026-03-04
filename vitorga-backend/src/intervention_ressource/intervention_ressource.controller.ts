import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InterventionRessourceService } from './intervention_ressource.service';
import { CreateInterventionRessourceDto } from './dto/create-intervention_ressource.dto';
import { UpdateInterventionRessourceDto } from './dto/update-intervention_ressource.dto';

@Controller('intervention-ressource')
export class InterventionRessourceController {
  constructor(private readonly interventionRessourceService: InterventionRessourceService) {}

  @Post()
  create(@Body() createInterventionRessourceDto: CreateInterventionRessourceDto) {
    return this.interventionRessourceService.create(createInterventionRessourceDto);
  }

  @Get()
  findAll() {
    return this.interventionRessourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interventionRessourceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInterventionRessourceDto: UpdateInterventionRessourceDto) {
    return this.interventionRessourceService.update(+id, updateInterventionRessourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interventionRessourceService.remove(+id);
  }
}

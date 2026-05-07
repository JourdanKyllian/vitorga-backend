import { Injectable } from '@nestjs/common';
import { CreateInterventionRessourceDto } from './dto/create-intervention_ressource.dto';
import { UpdateInterventionRessourceDto } from './dto/update-intervention_ressource.dto';

@Injectable()
export class InterventionRessourceService {
  create(createInterventionRessourceDto: CreateInterventionRessourceDto) {
    return 'This action adds a new interventionRessource';
  }

  findAll() {
    return `This action returns all interventionRessource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interventionRessource`;
  }

  update(
    id: number,
    updateInterventionRessourceDto: UpdateInterventionRessourceDto,
  ) {
    return `This action updates a #${id} interventionRessource`;
  }

  remove(id: number) {
    return `This action removes a #${id} interventionRessource`;
  }
}

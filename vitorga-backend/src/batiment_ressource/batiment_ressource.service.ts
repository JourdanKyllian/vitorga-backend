import { Injectable } from '@nestjs/common';
import { CreateBatimentRessourceDto } from './dto/create-batiment_ressource.dto';
import { UpdateBatimentRessourceDto } from './dto/update-batiment_ressource.dto';

@Injectable()
export class BatimentRessourceService {
  create(createBatimentRessourceDto: CreateBatimentRessourceDto) {
    return 'This action adds a new batimentRessource';
  }

  findAll() {
    return `This action returns all batimentRessource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} batimentRessource`;
  }

  update(id: number, updateBatimentRessourceDto: UpdateBatimentRessourceDto) {
    return `This action updates a #${id} batimentRessource`;
  }

  remove(id: number) {
    return `This action removes a #${id} batimentRessource`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateNormeDto } from './dto/create-norme.dto';
import { UpdateNormeDto } from './dto/update-norme.dto';

@Injectable()
export class NormesService {
  create(createNormeDto: CreateNormeDto) {
    return 'This action adds a new norme';
  }

  findAll() {
    return `This action returns all normes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} norme`;
  }

  update(id: number, updateNormeDto: UpdateNormeDto) {
    return `This action updates a #${id} norme`;
  }

  remove(id: number) {
    return `This action removes a #${id} norme`;
  }
}

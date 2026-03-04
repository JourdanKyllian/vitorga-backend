import { Injectable } from '@nestjs/common';
import { CreateVigneDto } from './dto/create-vigne.dto';
import { UpdateVigneDto } from './dto/update-vigne.dto';

@Injectable()
export class VigneService {
  create(createVigneDto: CreateVigneDto) {
    return 'This action adds a new vigne';
  }

  findAll() {
    return `This action returns all vigne`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vigne`;
  }

  update(id: number, updateVigneDto: UpdateVigneDto) {
    return `This action updates a #${id} vigne`;
  }

  remove(id: number) {
    return `This action removes a #${id} vigne`;
  }
}

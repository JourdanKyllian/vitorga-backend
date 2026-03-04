import { Injectable } from '@nestjs/common';
import { CreateBatimentDto } from './dto/create-batiment.dto';
import { UpdateBatimentDto } from './dto/update-batiment.dto';

@Injectable()
export class BatimentService {
  create(createBatimentDto: CreateBatimentDto) {
    return 'This action adds a new batiment';
  }

  findAll() {
    return `This action returns all batiment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} batiment`;
  }

  update(id: number, updateBatimentDto: UpdateBatimentDto) {
    return `This action updates a #${id} batiment`;
  }

  remove(id: number) {
    return `This action removes a #${id} batiment`;
  }
}

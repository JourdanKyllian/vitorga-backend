import { Injectable } from '@nestjs/common';
import { CreateParcelleDto } from './dto/create-parcelle.dto';
import { UpdateParcelleDto } from './dto/update-parcelle.dto';

@Injectable()
export class ParcelleService {
  create(createParcelleDto: CreateParcelleDto) {
    return 'This action adds a new parcelle';
  }

  findAll() {
    return `This action returns all parcelle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parcelle`;
  }

  update(id: number, updateParcelleDto: UpdateParcelleDto) {
    return `This action updates a #${id} parcelle`;
  }

  remove(id: number) {
    return `This action removes a #${id} parcelle`;
  }
}

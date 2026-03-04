import { Injectable } from '@nestjs/common';
import { CreateTypeProductionDto } from './dto/create-type_production.dto';
import { UpdateTypeProductionDto } from './dto/update-type_production.dto';

@Injectable()
export class TypeProductionService {
  create(createTypeProductionDto: CreateTypeProductionDto) {
    return 'This action adds a new typeProduction';
  }

  findAll() {
    return `This action returns all typeProduction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeProduction`;
  }

  update(id: number, updateTypeProductionDto: UpdateTypeProductionDto) {
    return `This action updates a #${id} typeProduction`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeProduction`;
  }
}

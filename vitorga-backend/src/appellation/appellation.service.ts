import { Injectable } from '@nestjs/common';
import { CreateAppellationDto } from './dto/create-appellation.dto';
import { UpdateAppellationDto } from './dto/update-appellation.dto';

@Injectable()
export class AppellationService {
  create(createAppellationDto: CreateAppellationDto) {
    return 'This action adds a new appellation';
  }

  findAll() {
    return `This action returns all appellation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appellation`;
  }

  update(id: number, updateAppellationDto: UpdateAppellationDto) {
    return `This action updates a #${id} appellation`;
  }

  remove(id: number) {
    return `This action removes a #${id} appellation`;
  }
}

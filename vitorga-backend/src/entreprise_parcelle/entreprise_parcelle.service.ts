import { Injectable } from '@nestjs/common';
import { CreateEntrepriseParcelleDto } from './dto/create-entreprise_parcelle.dto';
import { UpdateEntrepriseParcelleDto } from './dto/update-entreprise_parcelle.dto';

@Injectable()
export class EntrepriseParcelleService {
  create(createEntrepriseParcelleDto: CreateEntrepriseParcelleDto) {
    return 'This action adds a new entrepriseParcelle';
  }

  findAll() {
    return `This action returns all entrepriseParcelle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entrepriseParcelle`;
  }

  update(id: number, updateEntrepriseParcelleDto: UpdateEntrepriseParcelleDto) {
    return `This action updates a #${id} entrepriseParcelle`;
  }

  remove(id: number) {
    return `This action removes a #${id} entrepriseParcelle`;
  }
}

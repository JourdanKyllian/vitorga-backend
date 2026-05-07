import { PartialType } from '@nestjs/mapped-types';
import { CreateBatimentRessourceDto } from './create-batiment_ressource.dto';

export class UpdateBatimentRessourceDto extends PartialType(
  CreateBatimentRessourceDto,
) {}

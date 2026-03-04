import { PartialType } from '@nestjs/mapped-types';
import { CreateEntrepriseParcelleDto } from './create-entreprise_parcelle.dto';

export class UpdateEntrepriseParcelleDto extends PartialType(CreateEntrepriseParcelleDto) {}

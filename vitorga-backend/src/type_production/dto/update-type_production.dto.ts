import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeProductionDto } from './create-type_production.dto';

export class UpdateTypeProductionDto extends PartialType(
  CreateTypeProductionDto,
) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateVigneDto } from './create-vigne.dto';

export class UpdateVigneDto extends PartialType(CreateVigneDto) {}

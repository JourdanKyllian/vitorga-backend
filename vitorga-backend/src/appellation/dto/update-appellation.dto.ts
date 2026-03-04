import { PartialType } from '@nestjs/mapped-types';
import { CreateAppellationDto } from './create-appellation.dto';

export class UpdateAppellationDto extends PartialType(CreateAppellationDto) {}

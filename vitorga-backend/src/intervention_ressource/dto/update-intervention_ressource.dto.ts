import { PartialType } from '@nestjs/mapped-types';
import { CreateInterventionRessourceDto } from './create-intervention_ressource.dto';

export class UpdateInterventionRessourceDto extends PartialType(CreateInterventionRessourceDto) {}

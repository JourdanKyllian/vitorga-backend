import { Module } from '@nestjs/common';
import { InterventionRessourceService } from './intervention_ressource.service';
import { InterventionRessourceController } from './intervention_ressource.controller';

@Module({
  controllers: [InterventionRessourceController],
  providers: [InterventionRessourceService],
})
export class InterventionRessourceModule {}

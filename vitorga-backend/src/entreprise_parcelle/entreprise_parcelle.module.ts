import { Module } from '@nestjs/common';
import { EntrepriseParcelleService } from './entreprise_parcelle.service';
import { EntrepriseParcelleController } from './entreprise_parcelle.controller';

@Module({
  controllers: [EntrepriseParcelleController],
  providers: [EntrepriseParcelleService],
})
export class EntrepriseParcelleModule {}

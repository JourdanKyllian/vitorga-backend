import { Module } from '@nestjs/common';
import { BatimentRessourceService } from './batiment_ressource.service';
import { BatimentRessourceController } from './batiment_ressource.controller';

@Module({
  controllers: [BatimentRessourceController],
  providers: [BatimentRessourceService],
})
export class BatimentRessourceModule {}

import { Module } from '@nestjs/common';
import { CampagneService } from './campagne.service';
import { CampagneController } from './campagne.controller';

@Module({
  controllers: [CampagneController],
  providers: [CampagneService],
})
export class CampagneModule {}

import { Module } from '@nestjs/common';
import { VigneService } from './vigne.service';
import { VigneController } from './vigne.controller';

@Module({
  controllers: [VigneController],
  providers: [VigneService],
})
export class VigneModule {}

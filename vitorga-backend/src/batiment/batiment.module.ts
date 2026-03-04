import { Module } from '@nestjs/common';
import { BatimentService } from './batiment.service';
import { BatimentController } from './batiment.controller';

@Module({
  controllers: [BatimentController],
  providers: [BatimentService],
})
export class BatimentModule {}

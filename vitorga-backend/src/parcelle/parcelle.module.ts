import { Module } from '@nestjs/common';
import { ParcelleService } from './parcelle.service';
import { ParcelleController } from './parcelle.controller';

@Module({
  controllers: [ParcelleController],
  providers: [ParcelleService],
})
export class ParcelleModule {}

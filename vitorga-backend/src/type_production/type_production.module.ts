import { Module } from '@nestjs/common';
import { TypeProductionService } from './type_production.service';
import { TypeProductionController } from './type_production.controller';

@Module({
  controllers: [TypeProductionController],
  providers: [TypeProductionService],
})
export class TypeProductionModule {}

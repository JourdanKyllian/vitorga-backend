import { Module } from '@nestjs/common';
import { NormesService } from './normes.service';
import { NormesController } from './normes.controller';

@Module({
  controllers: [NormesController],
  providers: [NormesService],
})
export class NormesModule {}

import { Module } from '@nestjs/common';
import { AppellationService } from './appellation.service';
import { AppellationController } from './appellation.controller';

@Module({
  controllers: [AppellationController],
  providers: [AppellationService],
})
export class AppellationModule {}

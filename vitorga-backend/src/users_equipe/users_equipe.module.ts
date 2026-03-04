import { Module } from '@nestjs/common';
import { UsersEquipeService } from './users_equipe.service';
import { UsersEquipeController } from './users_equipe.controller';

@Module({
  controllers: [UsersEquipeController],
  providers: [UsersEquipeService],
})
export class UsersEquipeModule {}

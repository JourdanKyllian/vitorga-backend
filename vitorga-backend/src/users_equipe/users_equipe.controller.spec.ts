import { Test, TestingModule } from '@nestjs/testing';
import { UsersEquipeController } from './users_equipe.controller';
import { UsersEquipeService } from './users_equipe.service';

describe('UsersEquipeController', () => {
  let controller: UsersEquipeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersEquipeController],
      providers: [UsersEquipeService],
    }).compile();

    controller = module.get<UsersEquipeController>(UsersEquipeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

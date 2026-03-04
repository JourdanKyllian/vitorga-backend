import { Test, TestingModule } from '@nestjs/testing';
import { UsersEquipeService } from './users_equipe.service';

describe('UsersEquipeService', () => {
  let service: UsersEquipeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersEquipeService],
    }).compile();

    service = module.get<UsersEquipeService>(UsersEquipeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

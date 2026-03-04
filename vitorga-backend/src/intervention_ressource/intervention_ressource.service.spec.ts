import { Test, TestingModule } from '@nestjs/testing';
import { InterventionRessourceService } from './intervention_ressource.service';

describe('InterventionRessourceService', () => {
  let service: InterventionRessourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterventionRessourceService],
    }).compile();

    service = module.get<InterventionRessourceService>(InterventionRessourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

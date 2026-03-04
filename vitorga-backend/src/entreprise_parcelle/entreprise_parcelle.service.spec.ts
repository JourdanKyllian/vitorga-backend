import { Test, TestingModule } from '@nestjs/testing';
import { EntrepriseParcelleService } from './entreprise_parcelle.service';

describe('EntrepriseParcelleService', () => {
  let service: EntrepriseParcelleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntrepriseParcelleService],
    }).compile();

    service = module.get<EntrepriseParcelleService>(EntrepriseParcelleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

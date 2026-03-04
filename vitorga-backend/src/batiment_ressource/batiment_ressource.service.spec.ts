import { Test, TestingModule } from '@nestjs/testing';
import { BatimentRessourceService } from './batiment_ressource.service';

describe('BatimentRessourceService', () => {
  let service: BatimentRessourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BatimentRessourceService],
    }).compile();

    service = module.get<BatimentRessourceService>(BatimentRessourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

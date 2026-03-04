import { Test, TestingModule } from '@nestjs/testing';
import { EntrepriseParcelleController } from './entreprise_parcelle.controller';
import { EntrepriseParcelleService } from './entreprise_parcelle.service';

describe('EntrepriseParcelleController', () => {
  let controller: EntrepriseParcelleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntrepriseParcelleController],
      providers: [EntrepriseParcelleService],
    }).compile();

    controller = module.get<EntrepriseParcelleController>(EntrepriseParcelleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

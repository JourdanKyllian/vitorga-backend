import { Test, TestingModule } from '@nestjs/testing';
import { InterventionRessourceController } from './intervention_ressource.controller';
import { InterventionRessourceService } from './intervention_ressource.service';

describe('InterventionRessourceController', () => {
  let controller: InterventionRessourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterventionRessourceController],
      providers: [InterventionRessourceService],
    }).compile();

    controller = module.get<InterventionRessourceController>(
      InterventionRessourceController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { BatimentRessourceController } from './batiment_ressource.controller';
import { BatimentRessourceService } from './batiment_ressource.service';

describe('BatimentRessourceController', () => {
  let controller: BatimentRessourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BatimentRessourceController],
      providers: [BatimentRessourceService],
    }).compile();

    controller = module.get<BatimentRessourceController>(
      BatimentRessourceController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

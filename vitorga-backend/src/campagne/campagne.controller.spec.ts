import { Test, TestingModule } from '@nestjs/testing';
import { CampagneController } from './campagne.controller';
import { CampagneService } from './campagne.service';

describe('CampagneController', () => {
  let controller: CampagneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampagneController],
      providers: [CampagneService],
    }).compile();

    controller = module.get<CampagneController>(CampagneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

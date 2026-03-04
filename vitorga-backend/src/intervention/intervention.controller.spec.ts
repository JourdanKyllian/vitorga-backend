import { Test, TestingModule } from '@nestjs/testing';
import { InterventionController } from './intervention.controller';
import { InterventionService } from './intervention.service';

describe('InterventionController', () => {
  let controller: InterventionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterventionController],
      providers: [InterventionService],
    }).compile();

    controller = module.get<InterventionController>(InterventionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

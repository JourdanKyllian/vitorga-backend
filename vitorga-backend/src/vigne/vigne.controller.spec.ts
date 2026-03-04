import { Test, TestingModule } from '@nestjs/testing';
import { VigneController } from './vigne.controller';
import { VigneService } from './vigne.service';

describe('VigneController', () => {
  let controller: VigneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VigneController],
      providers: [VigneService],
    }).compile();

    controller = module.get<VigneController>(VigneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

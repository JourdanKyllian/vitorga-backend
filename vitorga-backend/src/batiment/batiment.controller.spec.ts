import { Test, TestingModule } from '@nestjs/testing';
import { BatimentController } from './batiment.controller';
import { BatimentService } from './batiment.service';

describe('BatimentController', () => {
  let controller: BatimentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BatimentController],
      providers: [BatimentService],
    }).compile();

    controller = module.get<BatimentController>(BatimentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

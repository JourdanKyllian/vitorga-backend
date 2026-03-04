import { Test, TestingModule } from '@nestjs/testing';
import { ParcelleController } from './parcelle.controller';
import { ParcelleService } from './parcelle.service';

describe('ParcelleController', () => {
  let controller: ParcelleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParcelleController],
      providers: [ParcelleService],
    }).compile();

    controller = module.get<ParcelleController>(ParcelleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

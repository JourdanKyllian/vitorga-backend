import { Test, TestingModule } from '@nestjs/testing';
import { TypeProductionController } from './type_production.controller';
import { TypeProductionService } from './type_production.service';

describe('TypeProductionController', () => {
  let controller: TypeProductionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeProductionController],
      providers: [TypeProductionService],
    }).compile();

    controller = module.get<TypeProductionController>(TypeProductionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

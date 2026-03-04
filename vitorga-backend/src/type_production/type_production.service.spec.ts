import { Test, TestingModule } from '@nestjs/testing';
import { TypeProductionService } from './type_production.service';

describe('TypeProductionService', () => {
  let service: TypeProductionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeProductionService],
    }).compile();

    service = module.get<TypeProductionService>(TypeProductionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

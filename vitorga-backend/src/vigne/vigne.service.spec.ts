import { Test, TestingModule } from '@nestjs/testing';
import { VigneService } from './vigne.service';

describe('VigneService', () => {
  let service: VigneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VigneService],
    }).compile();

    service = module.get<VigneService>(VigneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

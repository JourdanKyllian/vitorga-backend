import { Test, TestingModule } from '@nestjs/testing';
import { AppellationService } from './appellation.service';

describe('AppellationService', () => {
  let service: AppellationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppellationService],
    }).compile();

    service = module.get<AppellationService>(AppellationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

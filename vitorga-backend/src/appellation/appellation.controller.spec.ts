import { Test, TestingModule } from '@nestjs/testing';
import { AppellationController } from './appellation.controller';
import { AppellationService } from './appellation.service';

describe('AppellationController', () => {
  let controller: AppellationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppellationController],
      providers: [AppellationService],
    }).compile();

    controller = module.get<AppellationController>(AppellationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

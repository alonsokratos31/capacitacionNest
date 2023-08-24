import { Test, TestingModule } from '@nestjs/testing';
import { VillasController } from './villas.controller';
import { VillasService } from './villas.service';

describe('VillasController', () => {
  let controller: VillasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VillasController],
      providers: [VillasService],
    }).compile();

    controller = module.get<VillasController>(VillasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

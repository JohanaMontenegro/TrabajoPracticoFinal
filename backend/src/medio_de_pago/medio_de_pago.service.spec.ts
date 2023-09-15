import { Test, TestingModule } from '@nestjs/testing';
import { MedioDePagoService } from './medio_de_pago.service';

describe('MedioDePagoService', () => {
  let service: MedioDePagoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedioDePagoService],
    }).compile();

    service = module.get<MedioDePagoService>(MedioDePagoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

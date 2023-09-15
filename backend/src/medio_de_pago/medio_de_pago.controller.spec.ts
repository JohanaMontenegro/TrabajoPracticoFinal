import { Test, TestingModule } from '@nestjs/testing';
import { MedioDePagoController } from './medio_de_pago.controller';
import { MedioDePagoService } from './medio_de_pago.service';

describe('MedioDePagoController', () => {
  let controller: MedioDePagoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedioDePagoController],
      providers: [MedioDePagoService],
    }).compile();

    controller = module.get<MedioDePagoController>(MedioDePagoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

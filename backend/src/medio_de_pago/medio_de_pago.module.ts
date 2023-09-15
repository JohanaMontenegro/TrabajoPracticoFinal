import { Module } from '@nestjs/common';
import { MedioDePagoService } from './medio_de_pago.service';
import { MedioDePagoController } from './medio_de_pago.controller';

@Module({
  controllers: [MedioDePagoController],
  providers: [MedioDePagoService]
})
export class MedioDePagoModule {}

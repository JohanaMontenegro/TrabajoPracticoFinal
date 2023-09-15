import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { CompraModule } from './compra/compra.module';
import { EnvioModule } from './envio/envio.module';
import { MedioDePagoModule } from './medio_de_pago/medio_de_pago.module';
import { CarritoModule } from './carrito/carrito.module';

@Module({
  imports: [UsuarioModule, CompraModule, EnvioModule, MedioDePagoModule, CarritoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

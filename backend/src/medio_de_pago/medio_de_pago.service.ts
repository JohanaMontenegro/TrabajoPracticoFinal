import { Injectable } from '@nestjs/common';
import { CreateMedioDePagoDto } from './dto/create-medio_de_pago.dto';
import { UpdateMedioDePagoDto } from './dto/update-medio_de_pago.dto';

@Injectable()
export class MedioDePagoService {
  create(createMedioDePagoDto: CreateMedioDePagoDto) {
    return 'This action adds a new medioDePago';
  }

  findAll() {
    return `This action returns all medioDePago`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medioDePago`;
  }

  update(id: number, updateMedioDePagoDto: UpdateMedioDePagoDto) {
    return `This action updates a #${id} medioDePago`;
  }

  remove(id: number) {
    return `This action removes a #${id} medioDePago`;
  }
}

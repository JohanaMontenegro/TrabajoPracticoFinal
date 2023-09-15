import { PartialType } from '@nestjs/mapped-types';
import { CreateMedioDePagoDto } from './create-medio_de_pago.dto';

export class UpdateMedioDePagoDto extends PartialType(CreateMedioDePagoDto) {}

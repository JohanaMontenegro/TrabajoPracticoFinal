import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedioDePagoService } from './medio_de_pago.service';
import { CreateMedioDePagoDto } from './dto/create-medio_de_pago.dto';
import { UpdateMedioDePagoDto } from './dto/update-medio_de_pago.dto';

@Controller('medio-de-pago')
export class MedioDePagoController {
  constructor(private readonly medioDePagoService: MedioDePagoService) {}

  @Post()
  create(@Body() createMedioDePagoDto: CreateMedioDePagoDto) {
    return this.medioDePagoService.create(createMedioDePagoDto);
  }

  @Get()
  findAll() {
    return this.medioDePagoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medioDePagoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedioDePagoDto: UpdateMedioDePagoDto) {
    return this.medioDePagoService.update(+id, updateMedioDePagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medioDePagoService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VillasService } from './villas.service';
import { CreateVillaDto } from './dto/create-villa.dto';
import { UpdateVillaDto } from './dto/update-villa.dto';

@Controller('villas')
export class VillasController {
  constructor(private readonly villasService: VillasService) {}

  @Post()
  create(@Body() createVillaDto: CreateVillaDto) {
    return this.villasService.create(createVillaDto);
  }

  @Get()
  findAll() {
    return this.villasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.villasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVillaDto: UpdateVillaDto) {
    return this.villasService.update(+id, updateVillaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.villasService.remove(+id);
  }
}

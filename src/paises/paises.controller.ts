import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { PaisesService } from './paises.service';
import { Pais } from './entities/pais.entity';
import { CreatePaisDto } from './dtos/create-country.dto';

@Controller('paises')
export class PaisesController {
  constructor(private readonly paisesService: PaisesService) {}
  @Get('getAll')
  getHello(): Pais[] {
    return this.paisesService.findAll();
  }
  @Get(':id')
  getPaisPorNombre(@Param('id', ParseIntPipe) idPais: number): Pais {
    return this.paisesService.findOne(idPais);
  }

  @Get(':id/:size')
  formatoConDesestructraciones(
    @Param('id') id: number,
    @Param('size') size: string,
  ) {
    return `Páis con id: ${id}, tiene un tamaño de población de ${size}`;
  }
  @Post('createCountry')
  createProduct(@Body() crearPaisDtos: CreatePaisDto) {
    return this.paisesService.create(crearPaisDtos);
  }

  @Get('getCountryByIdAndSize/:id/:size')
  formatoConDesestructraciones2(
    @Param('id') id: number,
    @Param('size') size: string,
  ) {
    return `Esto obtiene el pais con el id: ${id}, y el total de población es: ${size}`;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Con esta acción se actualiza el #${id} del pais`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Con esta acción removemos el pais con el id: #${id}`;
  }
  @Get('getFilterCountry')
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `Esta acción retorna todos los paises. Limit ${limit}, offset: ${offset}`;
  }
  @Get('getCountryByName')
  getUsers(@Query('name') name: string): string {
    return name;
  }

  @Get('findAllByRes')
  findAllByRes(@Res() response) {
    // Express.js example using status() and send() methods
    response.status(400).send(`Esta acción retorna todos los países`);
  }
}

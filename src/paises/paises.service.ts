import { Injectable, NotFoundException } from '@nestjs/common';
import { Pais } from './entities/pais.entity';
import { CreatePaisDto } from './dtos/create-country.dto';

@Injectable()
export class PaisesService {
  private paises: Pais[] = [
    {
      id: 1,
      nombre: 'Chile',
      poblacion: 27,
      ciudades: ['Santiago', 'Arica'],
    },
  ];

  findAll() {
    return this.paises;
  }
  findOne(id: number) {
    const resultado = this.paises.find((item) => item.id == +id);
    if (!resultado) {
      throw new NotFoundException(
        `El país con el #${id} no existe en los registros`,
      );
    }
    return resultado;
  }
  create(createPaisesDto: CreatePaisDto) {
    this.paises.push(createPaisesDto);
  }
  update(id: number, updatePaisesDto: any) {
    const existePais = this.findOne(id);
    if (existePais) {
      //Logica de negocio
    }
  }
  remove(id: string) {
    const paisIndex = this.paises.findIndex((item) => item.id === +id);
    if (paisIndex >= 0) {
      this.paises.splice(paisIndex, 1);
    }
  }
}

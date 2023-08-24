import { Injectable } from '@nestjs/common';
import { CreateRegioneDto } from './dto/create-regione.dto';
import { UpdateRegioneDto } from './dto/update-regione.dto';

@Injectable()
export class RegionesService {
  create(createRegioneDto: CreateRegioneDto) {
    return 'This action adds a new regione';
  }

  findAll() {
    return `This action returns all regiones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} regione`;
  }

  update(id: number, updateRegioneDto: UpdateRegioneDto) {
    return `This action updates a #${id} regione`;
  }

  remove(id: number) {
    return `This action removes a #${id} regione`;
  }
}

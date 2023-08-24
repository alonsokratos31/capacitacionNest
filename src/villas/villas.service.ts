import { Injectable } from '@nestjs/common';
import { CreateVillaDto } from './dto/create-villa.dto';
import { UpdateVillaDto } from './dto/update-villa.dto';

@Injectable()
export class VillasService {
  create(createVillaDto: CreateVillaDto) {
    return 'This action adds a new villa';
  }

  findAll() {
    return `This action returns all villas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} villa`;
  }

  update(id: number, updateVillaDto: UpdateVillaDto) {
    return `This action updates a #${id} villa`;
  }

  remove(id: number) {
    return `This action removes a #${id} villa`;
  }
}

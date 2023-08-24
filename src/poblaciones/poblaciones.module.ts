import { Module } from '@nestjs/common';
import { PoblacionesService } from './poblaciones.service';
import { PoblacionesController } from './poblaciones.controller';

@Module({
  controllers: [PoblacionesController],
  providers: [PoblacionesService]
})
export class PoblacionesModule {}

import { PartialType } from '@nestjs/swagger';
import { CreatePoblacioneDto } from './create-poblacione.dto';

export class UpdatePoblacioneDto extends PartialType(CreatePoblacioneDto) {}

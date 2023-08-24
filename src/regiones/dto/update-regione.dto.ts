import { PartialType } from '@nestjs/swagger';
import { CreateRegioneDto } from './create-regione.dto';

export class UpdateRegioneDto extends PartialType(CreateRegioneDto) {}

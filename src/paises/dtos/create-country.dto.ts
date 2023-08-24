import { IsNumber, IsString } from 'class-validator';

export class CreatePaisDto {
  @IsNumber()
  readonly id: number;
  @IsString()
  readonly nombre: string;
  @IsNumber()
  readonly poblacion: number;
  @IsString({ each: true })
  readonly ciudades: string[];
}

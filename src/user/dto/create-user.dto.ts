import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'El nombre de un Usuario' })
  @IsString()
  readonly name: string;
  @ApiProperty({ description: 'El correo del Usuario' })
  @IsString()
  @IsEmail()
  email: string;
  @ApiProperty({ description: 'Contraseña del Usuario' })
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'La contraseña debe contener letrás Mayúsculas, minusculas y números',
  })
  password: string;
  @ApiProperty({ description: 'El perfil de usuario no existe' })
  @IsNumber()
  readonly idProfile: number;
}

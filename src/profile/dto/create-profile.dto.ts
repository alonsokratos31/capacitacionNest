import { IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  name: string;
  @IsString()
  photo: string;
}

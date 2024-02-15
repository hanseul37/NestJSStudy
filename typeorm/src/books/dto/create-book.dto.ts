import { IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  readonly author: string;

  @IsString()
  readonly name: string;
}

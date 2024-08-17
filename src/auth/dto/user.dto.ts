import { IsEmail, IsString, Length } from 'class-validator';

export class UserDto {
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Email incorrect' })
  readonly email: string;

  @IsString({ message: 'Must be a string' })
  @Length(4, 16, { message: 'Min 4 symbols, max 16 symbols' })
  readonly password: string;
}

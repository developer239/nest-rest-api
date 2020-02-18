import {
  IsString,
  MinLength,
  MaxLength,
  Matches,
  IsNotEmpty,
} from 'class-validator'

export class CredentialsDTO {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/u, {
    message: 'password too weak',
  })
  password: string
}

export class CreateDTO {
  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  salt: string

  @IsNotEmpty()
  password: string
}

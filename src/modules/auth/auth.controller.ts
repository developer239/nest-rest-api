import { Controller, Post, Body, ValidationPipe } from '@nestjs/common'
import { CredentialsDTO } from 'src/modules/auth/user/user.dto'
import { User } from 'src/modules/auth/user/user.entity'
import { UserService } from 'src/modules/auth/user/user.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentialsDto: CredentialsDTO
  ): Promise<User> {
    return this.userService.signUp(authCredentialsDto)
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCredentialsDto: CredentialsDTO
  ): Promise<{ accessToken: string }> {
    return this.userService.signIn(authCredentialsDto)
  }
}

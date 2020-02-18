import { Controller, Post, Body, ValidationPipe } from '@nestjs/common'
import { CredentialsDTO } from 'src/modules/auth/dtos/user'
import { AuthService } from 'src/modules/auth/services/auth'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentialsDto: CredentialsDTO
  ): Promise<void> {
    return this.authService.signUp(authCredentialsDto)
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCredentialsDto: CredentialsDTO
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto)
  }
}

import { Controller, Post, Body, ValidationPipe } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { CredentialsDTO } from 'src/modules/auth/user/user.dto'
import { User } from 'src/modules/auth/user/user.entity'
import { UserService } from 'src/modules/auth/user/user.service'
import { LoginResponse } from 'src/modules/auth/user/user.types'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @ApiOkResponse({
    type: User,
  })
  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentialsDto: CredentialsDTO
  ): Promise<User> {
    return this.userService.signUp(authCredentialsDto)
  }

  @ApiOkResponse({
    type: LoginResponse,
  })
  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCredentialsDto: CredentialsDTO
  ): Promise<LoginResponse> {
    return this.userService.signIn(authCredentialsDto)
  }
}

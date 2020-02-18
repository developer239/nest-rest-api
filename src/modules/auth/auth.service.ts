import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import { JwtPayload } from 'src/modules/auth/jwt/jwt.types'
import { CredentialsDTO } from 'src/modules/auth/user/user.dto'
import { UserRepository } from 'src/modules/auth/user/user.repository'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService
  ) {}

  signUp(credentialsDTO: CredentialsDTO): Promise<void> {
    return this.userRepository.signUp(credentialsDTO)
  }

  async signIn(
    credentialsDTO: CredentialsDTO
  ): Promise<{ accessToken: string }> {
    const username = await this.userRepository.validateUserPassword(
      credentialsDTO
    )

    if (!username) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const payload: JwtPayload = { username }
    const accessToken = this.jwtService.sign(payload)

    return { accessToken }
  }
}

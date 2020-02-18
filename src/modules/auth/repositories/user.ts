import { ConflictException, InternalServerErrorException } from '@nestjs/common'
import bcrypt from 'bcryptjs'
import { Repository, EntityRepository } from 'typeorm'
import { CredentialsDTO } from 'src/modules/auth/dtos/user'
import { User } from 'src/modules/auth/entities/user'

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(credentialsDTO: CredentialsDTO): Promise<void> {
    const { username, password } = credentialsDTO

    const user = this.create()
    user.username = username
    user.salt = await bcrypt.genSalt()
    user.password = await this.hashPassword(password, user.salt)

    try {
      await user.save()
    } catch (error) {
      if (error.code === '23505') {
        // duplicate username
        throw new ConflictException('Username already exists')
      } else {
        throw new InternalServerErrorException()
      }
    }
  }

  async validateUserPassword(credentialsDTO: CredentialsDTO): Promise<string> {
    const { username, password } = credentialsDTO
    const user = await this.findOne({ username })

    if (user && (await user.validatePassword(password))) {
      return user.username
    }

    return null
  }

  private hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt)
  }
}

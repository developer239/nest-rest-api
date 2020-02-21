import { Injectable } from '@nestjs/common'
import { User } from 'src/modules/auth/user/user.entity'
import { TestingEntityService } from 'src/modules/testing/testing-entity.service'

type IConstructorOf<TEntity> = new () => TEntity

@Injectable()
export class AuthTestingEntityService extends TestingEntityService {
  public createUser() {
    return this.create(User, User.getTestData())
  }
}

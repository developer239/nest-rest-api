import { createParamDecorator } from '@nestjs/common'
import { User } from 'src/modules/auth/entities/user'

export const GetUser = createParamDecorator(
  (data, req): User => {
    return req.user
  }
)

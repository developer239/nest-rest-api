import { createParamDecorator } from '@nestjs/common'
import { User } from 'src/modules/auth/user/user.entity'

export const GetUser = createParamDecorator((data, req): User => req.user)

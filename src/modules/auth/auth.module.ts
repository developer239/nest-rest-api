import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthService } from 'src/modules/auth/auth.service'
import { JwtStrategy } from 'src/modules/auth/jwt/jwt.service'
import { AuthController } from 'src/modules/auth/user/auth.controller'
import { UserRepository } from 'src/modules/auth/user/user.repository'
import { EnvModule } from 'src/modules/env/env.module'
import { EnvService } from 'src/modules/env/env.service'

@Module({
  imports: [
    EnvModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [EnvModule],
      inject: [EnvService],
      useFactory: (envService: EnvService) => ({
        secret: envService.getString('JWT_SECRET'),
        signOptions: {
          expiresIn: envService.getInt('JWT_EXPIRES'),
        },
      }),
    }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}

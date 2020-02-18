import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthController } from 'src/modules/auth/controllers/auth'
import { UserRepository } from 'src/modules/auth/repositories/user'
import { AuthService } from 'src/modules/auth/services/auth'
import { JwtStrategy } from 'src/modules/auth/services/jwt'
import { EnvModule } from 'src/modules/env'
import { EnvService } from 'src/modules/env/services/Env'

@Module({
  imports: [
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

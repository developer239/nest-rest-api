import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/modules/database'
import { EnvModule } from 'src/modules/env'
import { WelcomeModule } from 'src/modules/welcome'

@Module({
  imports: [
    EnvModule,
    DatabaseModule,
    WelcomeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}

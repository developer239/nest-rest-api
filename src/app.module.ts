import { Module } from '@nestjs/common'
import { AuthModule } from 'src/modules/auth'
import { DatabaseModule } from 'src/modules/database'
import { EnvModule } from 'src/modules/env'
import { TasksModule } from 'src/modules/tasks'
import { WelcomeModule } from 'src/modules/welcome'

@Module({
  imports: [EnvModule, DatabaseModule, TasksModule, AuthModule, WelcomeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

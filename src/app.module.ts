import { Module } from '@nestjs/common'
import { AuthModule } from 'src/modules/auth/auth.module'
import { DatabaseModule } from 'src/modules/database/database.module'
import { EnvModule } from 'src/modules/env/env.module'
import { TasksModule } from 'src/modules/tasks/tasks.module'
import { TerminusModule } from 'src/modules/terminus/terminus.module'
import { WelcomeModule } from 'src/modules/welcome/welcome.module'

@Module({
  imports: [
    EnvModule,
    DatabaseModule,
    TasksModule,
    AuthModule,
    WelcomeModule,
    TerminusModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

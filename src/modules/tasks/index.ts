import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from 'src/modules/auth'
import { TasksController } from 'src/modules/tasks/controllers/task'
import { TaskRepository } from 'src/modules/tasks/repositories/task'
import { TasksService } from 'src/modules/tasks/services/task'

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([TaskRepository])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}

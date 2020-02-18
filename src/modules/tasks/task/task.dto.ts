import { IsOptional, IsIn, IsNotEmpty } from 'class-validator'
import { TaskStatus } from 'src/modules/tasks/task/task.types'

export class GetFilterDTO {
  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status: TaskStatus

  @IsOptional()
  @IsNotEmpty()
  search: string
}

export class CreateDTO {
  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  description: string
}

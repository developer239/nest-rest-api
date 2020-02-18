import { PipeTransform, BadRequestException } from '@nestjs/common'
import { TaskStatus } from 'src/modules/tasks/task/task.types'

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ]

  transform(value: any) {
    // eslint-disable-next-line no-param-reassign
    value = value.toUpperCase()

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is an invalid status`)
    }

    return value
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status)
    return idx !== -1
  }
}
